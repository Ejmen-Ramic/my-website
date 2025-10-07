// api/github/[...path].js

const axios = require('axios');

const GITHUB_API_BASE = 'https://api.github.com';

async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!username || !token) {
    return res.status(500).json({
      error: 'Missing GITHUB_USERNAME or GITHUB_TOKEN in Vercel environment',
      have: { username: !!username, token: !!token }
    });
  }

  const api = axios.create({
    baseURL: GITHUB_API_BASE,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'PricePilot-App'
    },
    timeout: 30000
  });

  async function getLanguagesForAllRepos(user) {
    const reposResponse = await api.get(`/users/${user}/repos`, {
      params: { per_page: 100, sort: 'updated', type: 'owner' }
    });
    const repos = reposResponse.data;
    const languageStats = {};
    for (const repo of repos) {
      try {
        const resp = await api.get(`/repos/${user}/${repo.name}/languages`);
        const languages = resp.data;
        Object.entries(languages).forEach(([language, bytes]) => {
          languageStats[language] = (languageStats[language] || 0) + bytes;
        });
        await new Promise((r) => setTimeout(r, 100));
      } catch {}
    }
    return languageStats;
  }

  async function pagedCommitSearch(q) {
    let all = [];
    let page = 1;
    const perPage = 100;
    while (page <= 10) {
      const resp = await api.get('/search/commits', {
        params: { q, sort: 'committer-date', order: 'desc', per_page: perPage, page },
        headers: { Accept: 'application/vnd.github.cloak-preview+json' }
      });
      const items = resp.data?.items ?? [];
      if (items.length === 0) break;
      all = all.concat(items);
      if (items.length < perPage) break;
      page++;
      await new Promise((r) => setTimeout(r, 200));
    }
    return all;
  }

  try {
    // Normalize catch-all segments from various shapes:
    // - req.query['...path'] -> "profile" or ["repos", "foo"]
    // - req.query.path -> "profile" or ["repos","foo"]
    // - req.query[0] -> "profile" or ["repos","foo"]
    const q = req.query || {};
    let segments = [];

    const dotDotDot = q['...path'];
    if (Array.isArray(dotDotDot)) {
      segments = dotDotDot;
    } else if (typeof dotDotDot === 'string' && dotDotDot.length) {
      segments = [dotDotDot];
    } else if (Array.isArray(q.path)) {
      segments = q.path;
    } else if (typeof q.path === 'string' && q.path.length) {
      segments = [q.path];
    } else if (Array.isArray(q[0])) {
      segments = q[0];
    } else if (typeof q[0] === 'string' && q[0].length) {
      segments = [q[0]];
    }

    if (q.debug === '1') {
      return res.status(200).json({ query: q, segments });
    }

    if (segments.length === 1 && segments[0] === 'profile') {
      const response = await api.get(`/users/${username}`);
      return res.status(200).json(response.data);
    }

    if (segments.length === 1 && segments[0] === 'repos') {
      const response = await api.get(`/users/${username}/repos`, {
        params: { per_page: 100, sort: 'updated', type: 'owner' }
      });
      return res.status(200).json(response.data);
    }

    if (segments.length === 3 && segments[0] === 'repos' && segments[2] === 'commit-activity') {
      const repoName = segments[1];
      const response = await api.get(`/repos/${username}/${repoName}/stats/commit_activity`);
      return res.status(200).json(response.data ?? []);
    }

    if (segments.length === 3 && segments[0] === 'repos' && segments[2] === 'contributors') {
      const repoName = segments[1];
      const response = await api.get(`/repos/${username}/${repoName}/stats/contributors`);
      return res.status(200).json(response.data ?? []);
    }

    if (segments.length === 1 && segments[0] === 'languages') {
      const languageStats = await getLanguagesForAllRepos(username);
      return res.status(200).json(languageStats);
    }

    if (segments.length === 2 && segments[0] === 'commits' && segments[1] === 'recent') {
      const days = Number(q.days ?? 30);
      const since = new Date();
      since.setDate(since.getDate() - days);
      const sinceStr = since.toISOString().split('T')[0];
      const searchQ = `author:${username} committer-date:>${sinceStr}`;
      const all = await pagedCommitSearch(searchQ);
      return res.status(200).json(all);
    }

    if (segments.length === 3 && segments[0] === 'commits' && segments[1] === 'year' && /^\d{4}$/.test(segments[2])) {
      const year = segments[2];
      const searchQ = `author:${username} committer-date:${year}-01-01..${year}-12-31`;
      const all = await pagedCommitSearch(searchQ);
      return res.status(200).json(all);
    }

    if (segments.length === 2 && segments[0] === 'commits' && segments[1] === 'range') {
      const startDate = String(q.startDate ?? '');
      const endDate = String(q.endDate ?? '');
      if (!startDate || !endDate) {
        return res.status(400).json({ error: 'startDate and endDate are required' });
      }
      const searchQ = `author:${username} committer-date:${startDate}..${endDate}`;
      const all = await pagedCommitSearch(searchQ);
      return res.status(200).json(all);
    }

    return res.status(404).json({ error: 'Not found', segments });
  } catch (error) {
    const status = error?.response?.status ?? 500;
    const details = error?.response?.data ?? error?.message ?? 'Server error';
    console.error('API error:', status, details);
    return res.status(status).json({
      error: typeof details === 'string' ? details : (details?.message ?? 'Server error'),
      status,
      details
    });
  }
}

module.exports = handler;