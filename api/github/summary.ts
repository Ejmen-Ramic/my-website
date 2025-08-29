// api/github/summary.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

const query = `
  query Summary($login: String!) {
    user(login: $login) {
      followers { totalCount }
      following { totalCount }
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        contributionCalendar { totalContributions }
      }
      repositories(privacy: PUBLIC, first: 1) { totalCount }
    }
    rateLimit { remaining cost resetAt }
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

    const data = await ghRes.json();
    if (!ghRes.ok || data.errors) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(ghRes.status || 500).json({ error: 'GitHub GraphQL error', details: data.errors || data });
    }

    const u = data.data.user;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    return res.status(200).json({
      followers: u.followers.totalCount,
      following: u.following.totalCount,
      totalContributions: u.contributionsCollection.contributionCalendar.totalContributions,
      commits: u.contributionsCollection.totalCommitContributions,
      issues: u.contributionsCollection.totalIssueContributions,
      prs: u.contributionsCollection.totalPullRequestContributions,
      reviews: u.contributionsCollection.totalPullRequestReviewContributions,
      publicRepos: u.repositories.totalCount,
      rateLimit: data.data.rateLimit
    });
  } catch (err: any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ error: 'Server error', details: err?.message || String(err) });
  }
}