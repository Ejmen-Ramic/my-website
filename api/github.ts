import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import axios from 'axios';
import serverless from 'serverless-http';

const app = express();

const GITHUB_API_BASE = 'https://api.github.com';
const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME;

if (!token || !username) {
  console.error('Missing GITHUB_TOKEN or GITHUB_USERNAME in Vercel environment variables.');
  // In a real app, you might want to return a 500 error here, but for Vercel serverless,
  // it's better to let the individual route handlers deal with it.
}

const api = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    Authorization: `Bearer ${token}`,
    'Accept': 'application/vnd.github+json, application/vnd.github.text-match+json',
    'X-GitHub-Api-Version': '2022-11-28'
  },
  timeout: 20000 // 20 seconds timeout
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const pollStats = async (path: string, tries = 8, delay = 1500) => {
  for (let i = 0; i < tries; i++) {
    const resp = await api.get(path, { validateStatus: () => true }); // Don't throw on non-2xx
    if (resp.status === 200) return resp.data || [];
    if (resp.status !== 202) throw new Error(`GitHub stats failed with status ${resp.status}`);
    await sleep(delay);
  }
  throw new Error('GitHub stats polling timed out.');
};

// User profile endpoint
app.get('/api/github/profile', async (_req, res) => {
  try {
    if (!token || !username) return res.status(500).json({ error: 'Server configuration error: GitHub token or username missing.' });
    const response = await api.get(`/users/${username}`);
    res.json(response.data);
  } catch (error: any) {
    console.error('Error fetching user profile:', error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// User repos endpoint
app.get('/api/github/repos', async (_req, res) => {
  try {
    if (!token || !username) return res.status(500).json({ error: 'Server configuration error: GitHub token or username missing.' });
    const response = await api.get(`/users/${username}/repos`, {
      params: {
        per_page: 100,
        sort: 'updated',
        type: 'owner'
      }
    });
    res.json(response.data);
  } catch (error: any) {
    console.error('Error fetching repositories:', error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Repo commit activity endpoint
app.get('/api/github/repos/:repoName/commit-activity', async (req, res) => {
  try {
    if (!token || !username) return res.status(500).json({ error: 'Server configuration error: GitHub token or username missing.' });
    const { repoName } = req.params;
    const data = await pollStats(`/repos/${username}/${repoName}/stats/commit_activity`);
    res.json(data);
  } catch (error: any) {
    console.error(`Error fetching commit activity for ${req.params.repoName}:`, error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Repo contributor stats endpoint
app.get('/api/github/repos/:repoName/contributors', async (req, res) => {
  try {
    if (!token || !username) return res.status(500).json({ error: 'Server configuration error: GitHub token or username missing.' });
    const { repoName } = req.params;
    const data = await pollStats(`/repos/${username}/${repoName}/stats/contributors`);
    res.json(data);
  } catch (error: any) {
    console.error(`Error fetching contributor stats for ${req.params.repoName}:`, error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Language stats endpoint
app.get('/api/github/languages', async (_req, res) => {
  try {
    if (!token || !username) return res.status(500).json({ error: 'Server configuration error: GitHub token or username missing.' });
    const reposResponse = await api.get(`/users/${username}/repos`, {
      params: { per_page: 100, sort: 'updated', type: 'owner' }
    });
    const repos = reposResponse.data as Array<{ name: string }>;
    
    const languageStats: { [key: string]: number } = {};

    for (const repo of repos) {
      try {
        const response = await api.get(`/repos/${username}/${repo.name}/languages`);
        const languages = response.data;

        Object.entries(languages).forEach(([language, bytes]) => {
          languageStats[language] = (languageStats[language] || 0) + (bytes as number);
        });

        await sleep(100); // GitHub API rate limit consideration
      } catch (error: any) {
        console.error(`Error fetching languages for ${repo.name}:`, error.message);
        // Continue to next repo even if one fails
      }
    }
    res.json(languageStats);
  } catch (error: any) {
    console.error('Error fetching language stats:', error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Recent commits endpoint
app.get('/api/github/commits/recent', async (req, res) => {
  try {
    if (!token || !username) return res.status(500).json({ error: 'Server configuration error: GitHub token or username missing.' });
    const days = Number(req.query.days) || 30;
    const since = new Date();
    since.setDate(since.getDate() - days);
    const sinceStr = since.toISOString().split('T')[0];
    
    let allCommits: any[] = [];
    let page = 1;
    const perPage = 100;
    
    while (page <= 10) { // Limit to 10 pages to prevent excessive requests
      const response = await api.get('/search/commits', {
        params: {
          q: `author:${username} committer-date:>${sinceStr}`,
          sort: 'committer-date',
          order: 'desc',
          per_page: perPage,
          page: page
        }
      });

      const commits = response.data.items;
      if (commits.length === 0) break;
      
      allCommits = [...allCommits, ...commits];
      
      if (commits.length < perPage) break;
      
      page++;
      await sleep(200); // GitHub API rate limit consideration
    }

    res.json(allCommits);
  } catch (error: any) {
    console.error('Error fetching recent commits:', error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Commits by year endpoint
app.get('/api/github/commits/year/:year', async (req, res) => {
  try {
    if (!token || !username) return res.status(500).json({ error: 'Server configuration error: GitHub token or username missing.' });
    const { year } = req.params;
    const startDate = `${year}-01-01`;
    const endDate = `${year}-12-31`;
    
    let allCommits: any[] = [];
    let page = 1;
    const perPage = 100;
    
    while (page <= 10) { // Limit to 10 pages
      const response = await api.get('/search/commits', {
        params: {
          q: `author:${username} committer-date:${startDate}..${endDate}`,
          sort: 'committer-date',
          order: 'desc',
          per_page: perPage,
          page: page
        }
      });

      const commits = response.data.items;
      if (commits.length === 0) break;
      
      allCommits = [...allCommits, ...commits];
      
      if (commits.length < perPage) break;
      
      page++;
      await sleep(200); // GitHub API rate limit consideration
    }

    res.json(allCommits);
  } catch (error: any) {
    console.error(`Error fetching commits for year ${req.params.year}:`, error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Commits by date range endpoint
app.get('/api/github/commits/range', async (req, res) => {
  try {
    if (!token || !username) return res.status(500).json({ error: 'Server configuration error: GitHub token or username missing.' });
    const { startDate, endDate } = req.query as { startDate?: string; endDate?: string };
    
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate are required' });
    }

    const perPage = 100;
    let page = 1;
    const all: any[] = [];
    const q = `author:${username} committer-date:${startDate}..${endDate}`;

    while (page <= 10) {
      const resp = await api.get('/search/commits', {
        params: { q, sort: 'committer-date', order: 'desc', per_page: perPage, page }
      });
      const items = resp.data.items || [];
      all.push(...items);
      if (items.length < perPage) break;
      page++;
      await sleep(200);
    }

    return res.json(all);
  } catch (error: any) {
    return res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Export the serverless handler
export default serverless(app);