// api/github/repos.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

const GH_API_BASE = 'https://api.github.com';
const API_VERSION = '2022-11-28';

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

    const baseHeaders: Record<string, string> = {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': API_VERSION,
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'portfolio-stats'
    };

    // Fetch repos (public)
    const reposRes = await fetch(`${GH_API_BASE}/users/${username}/repos?per_page=100&sort=updated`, {
      headers: baseHeaders
    });
    if (!reposRes.ok) {
      const text = await reposRes.text();
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(reposRes.status).json({ error: 'GitHub REST error', details: text });
    }
    const repos = await reposRes.json();

    // Choose top repos to detail (stars first, then recent)
    const sorted = [...repos].sort((a: any, b: any) => {
      if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });
    const top = sorted.slice(0, 12);

    // Fetch languages per top repo
    const detailed = await Promise.all(
      top.map(async (r: any) => {
        const langRes = await fetch(`${GH_API_BASE}/repos/${r.owner.login}/${r.name}/languages`, {
          headers: baseHeaders
        });
        const languages = langRes.ok ? await langRes.json() : {};
        const topicsRes = await fetch(`${GH_API_BASE}/repos/${r.owner.login}/${r.name}/topics`, {
          headers: { ...baseHeaders, 'Accept': 'application/vnd.github.mercy-preview+json, application/vnd.github+json' }
        });
        const topicsJson = topicsRes.ok ? await topicsRes.json() : { names: [] };

        return {
          id: r.id,
          name: r.name,
          full_name: r.full_name,
          description: r.description,
          html_url: r.html_url,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          open_issues_count: r.open_issues_count,
          watchers_count: r.watchers_count,
          language: r.language,
          topics: topicsJson.names || [],
          pushed_at: r.pushed_at,
          updated_at: r.updated_at,
          languages // { TypeScript: bytes, JavaScript: bytes, ... }
        };
      })
    );

    // Aggregate languages across top repos
    const languageTotals: Record<string, number> = {};
    detailed.forEach((repo) => {
      Object.entries(repo.languages).forEach(([lang, bytes]) => {
        languageTotals[lang] = (languageTotals[lang] || 0) + (bytes as number);
      });
    });

    // Prepare stars-by-repo for chart
    const starsByRepo = detailed.map((r) => ({ name: r.name, stars: r.stargazers_count }));

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    return res.status(200).json({
      topRepos: detailed,
      starsByRepo,
      languageTotals
    });
  } catch (err: any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ error: 'Server error', details: err?.message || String(err) });
  }
}