// githubService.ts
import axios, { AxiosResponse } from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const token = process.env.REACT_APP_GITHUB_TOKEN;
const username = process.env.REACT_APP_GITHUB_USERNAME;

// TypeScript interfaces
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

const api = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

export const githubService = {
  // Get user profile data
  async getUserProfile(): Promise<GitHubUser> {
    try {
      const response: AxiosResponse<GitHubUser> = await api.get(`/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  // Get all user repositories
  async getUserRepos(): Promise<GitHubRepo[]> {
    try {
      const response: AxiosResponse<GitHubRepo[]> = await api.get(`/users/${username}/repos`, {
        params: {
          per_page: 100,
          sort: 'updated',
          type: 'owner'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  },

  // Get commit activity for a specific repository
  async getRepoCommitActivity(repoName: string): Promise<CommitActivity[]> {
    try {
      const response: AxiosResponse<CommitActivity[]> = await api.get(`/repos/${username}/${repoName}/stats/commit_activity`);
      return response.data || [];
    } catch (error) {
      console.error(`Error fetching commit activity for ${repoName}:`, error);
      return [];
    }
  },

  // Get contributor stats for a repository
  async getRepoContributorStats(repoName: string): Promise<ContributorStats[]> {
    try {
      const response: AxiosResponse<ContributorStats[]> = await api.get(`/repos/${username}/${repoName}/stats/contributors`);
      return response.data || [];
    } catch (error) {
      console.error(`Error fetching contributor stats for ${repoName}:`, error);
      return [];
    }
  },

  // Get language statistics across all repositories
  async getLanguageStats(): Promise<LanguageStats> {
    try {
      const repos = await this.getUserRepos();
      const languageStats: LanguageStats = {};

      for (const repo of repos) {
        try {
          const response: AxiosResponse<LanguageStats> = await api.get(`/repos/${username}/${repo.name}/languages`);
          const languages = response.data;

          Object.entries(languages).forEach(([language, bytes]) => {
            languageStats[language] = (languageStats[language] || 0) + bytes;
          });

          // Add delay to respect rate limits
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          console.error(`Error fetching languages for ${repo.name}:`, error);
        }
      }

      return languageStats;
    } catch (error) {
      console.error('Error fetching language stats:', error);
      throw error;
    }
  },

  // UPDATED: Get recent commits with pagination to fetch more than 100
  async getRecentCommits(days: number = 30): Promise<CommitSearchResult[]> {
    try {
      const since = new Date();
      since.setDate(since.getDate() - days);
      
      let allCommits: CommitSearchResult[] = [];
      let page = 1;
      const perPage = 100;
      
      while (page <= 10) { // Limit to 10 pages (1000 commits max) to avoid rate limits
        const response: AxiosResponse<{ items: CommitSearchResult[] }> = await api.get('/search/commits', {
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
        
        // If we got less than perPage results, we've reached the end
        if (commits.length < perPage) break;
        
        page++;
        
        // Add delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      console.log(`Fetched ${allCommits.length} commits for last ${days} days`);
      return allCommits;
    } catch (error) {
      console.error('Error fetching recent commits:', error);
      throw error;
    }
  },

  // UPDATED: Get commits by specific year with pagination
  async getCommitsByYear(year: number): Promise<CommitSearchResult[]> {
    try {
      const startDate = `${year}-01-01`;
      const endDate = `${year}-12-31`;
      
      let allCommits: CommitSearchResult[] = [];
      let page = 1;
      const perPage = 100;
      
      while (page <= 10) { // Limit to 10 pages (1000 commits max) to avoid rate limits
        const response: AxiosResponse<{ items: CommitSearchResult[] }> = await api.get('/search/commits', {
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
        
        // If we got less than perPage results, we've reached the end
        if (commits.length < perPage) break;
        
        page++;
        
        // Add delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      console.log(`Fetched ${allCommits.length} commits for year ${year}`);
      return allCommits;
    } catch (error) {
      console.error(`Error fetching commits for year ${year}:`, error);
      return []; // Return empty array instead of throwing
    }
  },

  // UPDATED: Get commits by date range with pagination
  async getCommitsByDateRange(startDate: string, endDate: string): Promise<CommitSearchResult[]> {
    try {
      let allCommits: CommitSearchResult[] = [];
      let page = 1;
      const perPage = 100;
      
      while (page <= 10) { // Limit to 10 pages (1000 commits max) to avoid rate limits
        const response: AxiosResponse<{ items: CommitSearchResult[] }> = await api.get('/search/commits', {
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
        
        // If we got less than perPage results, we've reached the end
        if (commits.length < perPage) break;
        
        page++;
        
        // Add delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      console.log(`Fetched ${allCommits.length} commits for date range ${startDate} to ${endDate}`);
      return allCommits;
    } catch (error) {
      console.error(`Error fetching commits for date range ${startDate} to ${endDate}:`, error);
      return [];
    }
  }
};

// Export types for use in components
export type {
  GitHubUser,
  GitHubRepo,
  CommitActivity,
  ContributorStats,
  CommitSearchResult,
  LanguageStats
};