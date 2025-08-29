// api/github/contributions.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

const query = `
  query Contributions($login: String!) {
    user(login: $login) {
      followers { totalCount }
      following { totalCount }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        restrictedContributionsCount
        startedAt
        endedAt
      }
    }
    rateLimit {
      remaining
      cost
      resetAt
    }
  }
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(200).end();
  }

  try {
    const { username } = req.query;
    if (!username || typeof username !== 'string') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(400).json({ error: 'Missing ?username= parameter' });
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(500).json({ error: 'GITHUB_TOKEN not configured on server' });
    }

    const ghRes = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ query, variables: { login: username } })
    });

    if (!ghRes.ok) {
      const text = await ghRes.text();
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(ghRes.status).json({ error: 'GitHub GraphQL error', details: text });
    }

    const data = await ghRes.json();
    if (data.errors) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(500).json({ error: 'GitHub GraphQL returned errors', details: data.errors });
    }

    const user = data.data.user;
    const cc = user.contributionsCollection;
    const weeks = cc.contributionCalendar.weeks;

    // Flatten to daily array for Recharts
    const days: { date: string; count: number }[] = [];
    for (const w of weeks) {
      for (const d of w.contributionDays) {
        days.push({ date: d.date, count: d.contributionCount });
      }
    }

    // Optionally compute weekly totals (frontend can also compute this)
    const weekly: { weekIndex: number; total: number }[] = weeks.map((w: any, idx: number) => ({
      weekIndex: idx,
      total: w.contributionDays.reduce((sum: number, d: any) => sum + d.contributionCount, 0)
    }));

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800'); // 30 min on Vercel edge
    return res.status(200).json({
      days,
      weekly,
      totals: {
        totalContributions: cc.contributionCalendar.totalContributions,
        commit: cc.totalCommitContributions,
        pr: cc.totalPullRequestContributions,
        issue: cc.totalIssueContributions,
        review: cc.totalPullRequestReviewContributions,
        restricted: cc.restrictedContributionsCount,
        followers: user.followers.totalCount,
        following: user.following.totalCount,
        range: { start: cc.startedAt, end: cc.endedAt }
      },
      rateLimit: data.data.rateLimit
    });
  } catch (err: any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ error: 'Server error', details: err?.message || String(err) });
  }
}