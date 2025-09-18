import axios, { AxiosResponse } from 'axios';

const API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://your-app-name.vercel.app' // replace with your app’s Vercel URL
  : 'http://localhost:3000';            // CRA/Vite dev server

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  size: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

interface CommitActivity {
  total: number;
  week: number;
  days: number[];
}

interface ContributorStats {
  author: GitHubUser;
  total: number;
  weeks: Array<{
    w: number;
    a: number;
    d: number;
    c: number;
  }>;
}

interface CommitSearchResult {
  sha: string;
  commit: {
    message: string;
    committer: {
      name: string;
      email: string;
      date: string;
    };
  };
  repository: {
    name: string;
    full_name: string;
  };
}

interface LanguageStats {
  [language: string]: number;
}


export const githubService = {
  async getUserProfile(): Promise<GitHubUser> {
    try {
      const response: AxiosResponse<GitHubUser> = await api.get('/api/github/profile');
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  async getUserRepos(): Promise<GitHubRepo[]> {
    try {
      const response: AxiosResponse<GitHubRepo[]> = await api.get('/api/github/repos');
      return response.data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  },

  async getRepoCommitActivity(repoName: string): Promise<CommitActivity[]> {
    try {
      const response: AxiosResponse<CommitActivity[]> = await api.get(`/api/github/repos/${repoName}/commit-activity`);
      return response.data || [];
    } catch (error) {
      console.error(`Error fetching commit activity for ${repoName}:`, error);
      return [];
    }
  },

  async getRepoContributorStats(repoName: string): Promise<ContributorStats[]> {
    try {
      const response: AxiosResponse<ContributorStats[]> = await api.get(`/api/github/repos/${repoName}/contributors`);
      return response.data || [];
    } catch (error) {
      console.error(`Error fetching contributor stats for ${repoName}:`, error);
      return [];
    }
  },

  async getLanguageStats(): Promise<LanguageStats> {
    try {
      const response: AxiosResponse<LanguageStats> = await api.get('/api/github/languages');
      return response.data;
    } catch (error) {
      console.error('Error fetching language stats:', error);
      throw error;
    }
  },

  async getRecentCommits(days: number = 30): Promise<CommitSearchResult[]> {
    try {
      const response: AxiosResponse<CommitSearchResult[]> = await api.get('/api/github/commits/recent', {
        params: { days }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching recent commits:', error);
      throw error;
    }
  },

  async getCommitsByYear(year: number): Promise<CommitSearchResult[]> {
    try {
      const response: AxiosResponse<CommitSearchResult[]> = await api.get(`/api/github/commits/year/${year}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching commits for year ${year}:`, error);
      return [];
    }
  },

  async getCommitsByDateRange(startDate: string, endDate: string): Promise<CommitSearchResult[]> {
    try {
      const response: AxiosResponse<CommitSearchResult[]> = await api.get('/api/github/commits/range', {
        params: { startDate, endDate }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching commits for date range ${startDate} to ${endDate}:`, error);
      return [];
    }
  }
};

export type {
  GitHubUser,
  GitHubRepo,
  CommitActivity,
  ContributorStats,
  CommitSearchResult,
  LanguageStats
};