// /api/top-repos.ts

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const TOP_REPOS_QUERY = `#graphql
  query TopRepos($login: String!, $limit: Int!) {
    user(login: $login) {
      repositories(privacy: PUBLIC, first: $limit, orderBy: { field: STARGAZERS, direction: DESC }) {
        nodes {
          name
          stargazerCount
          forkCount
          primaryLanguage { name color }
          url
          updatedAt
        }
      }
    }
  }
`;

export default async function handler(req: any, res: any) {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return res.status(500).json({ error: "Missing GITHUB_TOKEN" });

    const { username, limit = "6" } = req.query;
    if (!username) return res.status(400).json({ error: "username is required" });

    const resp = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: TOP_REPOS_QUERY,
        variables: { login: username, limit: parseInt(limit as string, 10) },
      }),
    });

    const json = await resp.json();
    if (!resp.ok || json.errors) return res.status(500).json({ error: json.errors ?? json });

    const repos = (json.data.user?.repositories?.nodes ?? []).map((n: any) => ({
      name: n.name,
      stars: n.stargazerCount,
      forks: n.forkCount,
      language: n.primaryLanguage?.name ?? null,
      url: n.url,
      updatedAt: n.updatedAt,
    }));

    res.status(200).json({ repos });
  } catch (err: any) {
    res.status(500).json({ error: err?.message ?? "Unknown error" });
  }
}
