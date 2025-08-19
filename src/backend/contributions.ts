// /api/contributions.ts

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const CONTRIB_QUERY = `#graphql
  query Contributions($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

    export default async function handler(req: any, res: any) {

  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return res.status(500).json({ error: "Missing GITHUB_TOKEN" });

    const { username } = req.query;
    if (!username) return res.status(400).json({ error: "username is required" });

    const to = new Date();
    const from = new Date();
    from.setUTCDate(from.getUTCDate() - 365);

    const resp = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CONTRIB_QUERY,
        variables: { login: username, from: from.toISOString(), to: to.toISOString() },
      }),
    });

    const json = await resp.json();
    if (!resp.ok || json.errors) return res.status(500).json({ error: json.errors ?? json });

    const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks ?? [];
    const days: { date: string; contributionCount: number }[] =
      weeks.flatMap((w: any) => w.contributionDays);

    // Aggregate to months
    const monthlyMap = new Map<string, number>();
    for (const d of days) {
      const [y, m] = d.date.split("-");
      const key = `${y}-${m}`;
      monthlyMap.set(key, (monthlyMap.get(key) ?? 0) + d.contributionCount);
    }

    const monthly = Array.from(monthlyMap.entries())
      .map(([month, count]) => ({ month, count }))
      .sort((a, b) => (a.month < b.month ? -1 : 1));

    const total = days.reduce((acc, d) => acc + d.contributionCount, 0);

    res.status(200).json({ total, monthly, days });
  } catch (err: any) {
    res.status(500).json({ error: err?.message ?? "Unknown error" });
  }
}
