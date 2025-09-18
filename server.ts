import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); 

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for your React app
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-deployed-app.com' 
    : 'http://localhost:3000'
}));

app.use(express.json());

const GITHUB_API_BASE = 'https://api.github.com';
const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME;

if (!token || !username) {
  throw new Error("Missing GITHUB_TOKEN or GITHUB_USERNAME in .env.local");
}

const api = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    Authorization: `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

// User profile endpoint
app.get('/api/github/profile', async (req, res) => {
  try {
    const response = await api.get(`/users/${username}`);
    res.json(response.data);
  } catch (error: any) {
    console.error('Error fetching user profile:', error);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// User repos endpoint
app.get('/api/github/repos', async (req, res) => {
  try {
    const response = await api.get(`/users/${username}/repos`, {
      params: {
        per_page: 100,
        sort: 'updated',
        type: 'owner'
      }
    });
    res.json(response.data);
  } catch (error: any) {
    console.error('Error fetching repositories:', error);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Repo commit activity endpoint
app.get('/api/github/repos/:repoName/commit-activity', async (req, res) => {
  try {
    const { repoName } = req.params;
    const response = await api.get(`/repos/${username}/${repoName}/stats/commit_activity`);
    res.json(response.data || []);
  } catch (error: any) {
    // console.error(`Error fetching commit activity for ${repoName}:`, error);
    // res.json([]);
  }
});

// Repo contributor stats endpoint
app.get('/api/github/repos/:repoName/contributors', async (req, res) => {
  try {
    const { repoName } = req.params;
    const response = await api.get(`/repos/${username}/${repoName}/stats/contributors`);
    res.json(response.data || []);
  } catch (error: any) {
    // console.error(`Error fetching contributor stats for ${repoName}:`, error);
    // res.json([]);
  }
});

// Language stats endpoint
app.get('/api/github/languages', async (req, res) => {
  try {
    // Get repos first
    const reposResponse = await api.get(`/users/${username}/repos`, {
      params: { per_page: 100, sort: 'updated', type: 'owner' }
    });
    const repos = reposResponse.data;
    
    const languageStats: { [key: string]: number } = {};

    for (const repo of repos) {
      try {
        const response = await api.get(`/repos/${username}/${repo.name}/languages`);
        const languages = response.data;

        Object.entries(languages).forEach(([language, bytes]) => {
          languageStats[language] = (languageStats[language] || 0) + (bytes as number);
        });

        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error: any) {
        console.error(`Error fetching languages for ${repo.name}:`, error);
      }
    }

    res.json(languageStats);
  } catch (error: any) {
    console.error('Error fetching language stats:', error);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Recent commits endpoint
app.get('/api/github/commits/recent', async (req, res) => {
  try {
    const days = Number(req.query.days) || 30;
    const since = new Date();
    since.setDate(since.getDate() - days);
    
    let allCommits: any[] = [];
    let page = 1;
    const perPage = 100;
    
    while (page <= 10) {
      const response = await api.get('/search/commits', {
        params: {
          q: `author:${username} committer-date:>${since.toISOString().split('T')[0]}`,
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
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log(`Fetched ${allCommits.length} commits for last ${days} days`);
    res.json(allCommits);
  } catch (error: any) {
    console.error('Error fetching recent commits:', error);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Commits by year endpoint
app.get('/api/github/commits/year/:year', async (req, res) => {
  try {
    const { year } = req.params;
    const startDate = `${year}-01-01`;
    const endDate = `${year}-12-31`;
    
    let allCommits: any[] = [];
    let page = 1;
    const perPage = 100;
    
    while (page <= 10) {
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
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log(`Fetched ${allCommits.length} commits for year ${year}`);
    res.json(allCommits);
  } catch (error: any) {
    // console.error(`Error fetching commits for year ${year}:`, error);
    // res.json([]);
  }
});

// Commits by date range endpoint
app.get('/api/github/commits/range', async (req, res) => {
  try {
    const { startDate, endDate } = req.query as { startDate?: string; endDate?: string };
    
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate are required' });
    }
    
    let allCommits: any[] = [];
    let page = 1;
    const perPage = 100;
    
    while (page <= 10) {
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
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log(`Fetched ${allCommits.length} commits for date range ${startDate} to ${endDate}`);
    res.json(allCommits);
  } catch (error: any) {
    // console.error(`Error fetching commits for date range ${startDate} to ${endDate}:`, error);
    // res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});