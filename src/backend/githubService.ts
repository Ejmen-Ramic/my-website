import axios, { AxiosResponse } from 'axios';

// TEMP: client-only, unauthenticated. Replace 'YOUR_USERNAME' with your public GitHub username.
// Later, switch to calling your own /api/github/* proxy and remove the hardcoded username.
const GITHUB_API_BASE = 'https://api.github.com';
const username = 'Ejmen-Ramic'; // e.g., 'octocat'

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
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

export const githubService = {
  async getUserProfile(): Promise<GitHubUser> {
    const response: AxiosResponse<GitHubUser> = await api.get(`/users/${username}`);
    return response.data;
  },

  async getUserRepos(): Promise<GitHubRepo[]> {
    const response: AxiosResponse<GitHubRepo[]> = await api.get(`/users/${username}/repos`, {
      params: { per_page: 100, sort: 'updated', type: 'owner' },
    });
    return response.data;
  },

  async getRepoCommitActivity(repoName: string): Promise<CommitActivity[]> {
    try {
      const response: AxiosResponse<CommitActivity[]> = await api.get(
        `/repos/${username}/${repoName}/stats/commit_activity`
      );
      return response.data || [];
    } catch {
      return [];
    }
  },

  async getRepoContributorStats(repoName: string): Promise<ContributorStats[]> {
    try {
      const response: AxiosResponse<ContributorStats[]> = await api.get(
        `/repos/${username}/${repoName}/stats/contributors`
      );
      return response.data || [];
    } catch {
      return [];
    }
  },

  async getLanguageStats(): Promise<LanguageStats> {
    const repos = await this.getUserRepos();
    const languageStats: LanguageStats = {};
    for (const repo of repos) {
      try {
        const response: AxiosResponse<LanguageStats> = await api.get(
          `/repos/${username}/${repo.name}/languages`
        );
        const languages = response.data;
        Object.entries(languages).forEach(([language, bytes]) => {
          languageStats[language] = (languageStats[language] || 0) + Number(bytes);
        });
        await new Promise((r) => setTimeout(r, 100));
      } catch {
        // ignore per-repo language failures
      }
    }
    return languageStats;
  },

  async getRecentCommits(days: number = 30): Promise<CommitSearchResult[]> {
    const since = new Date();
    since.setDate(since.getDate() - days);
    let allCommits: CommitSearchResult[] = [];
    let page = 1;
    const perPage = 100;

    while (page <= 10) {
      const response: AxiosResponse<{ items: CommitSearchResult[] }> = await api.get(
        '/search/commits',
        {
          params: {
            q: `author:${username} committer-date:>${since.toISOString().split('T')[0]}`,
            sort: 'committer-date',
            order: 'desc',
            per_page: perPage,
            page,
          },
          headers: {
            // Some search endpoints historically required a custom Accept, but v3 JSON works for most
            Accept: 'application/vnd.github+json',
          },
        }
      );
      const commits = response.data.items || [];
      if (commits.length === 0) break;
      allCommits = allCommits.concat(commits);
      if (commits.length < perPage) break;
      page++;
      await new Promise((r) => setTimeout(r, 200));
    }

    return allCommits;
  },

  async getCommitsByYear(year: number): Promise<CommitSearchResult[]> {
    const startDate = `${year}-01-01`;
    const endDate = `${year}-12-31`;
    let allCommits: CommitSearchResult[] = [];
    let page = 1;
    const perPage = 100;

    while (page <= 10) {
      const response: AxiosResponse<{ items: CommitSearchResult[] }> = await api.get(
        '/search/commits',
        {
          params: {
            q: `author:${username} committer-date:${startDate}..${endDate}`,
            sort: 'committer-date',
            order: 'desc',
            per_page: perPage,
            page,
          },
        }
      );
      const commits = response.data.items || [];
      if (commits.length === 0) break;
      allCommits = allCommits.concat(commits);
      if (commits.length < perPage) break;
      page++;
      await new Promise((r) => setTimeout(r, 200));
    }

    return allCommits;
  },

  async getCommitsByDateRange(startDate: string, endDate: string): Promise<CommitSearchResult[]> {
    let allCommits: CommitSearchResult[] = [];
    let page = 1;
    const perPage = 100;

    while (page <= 10) {
      const response: AxiosResponse<{ items: CommitSearchResult[] }> = await api.get(
        '/search/commits',
        {
          params: {
            q: `author:${username} committer-date:${startDate}..${endDate}`,
            sort: 'committer-date',
            order: 'desc',
            per_page: perPage,
            page,
          },
        }
      );
      const commits = response.data.items || [];
      if (commits.length === 0) break;
      allCommits = allCommits.concat(commits);
      if (commits.length < perPage) break;
      page++;
      await new Promise((r) => setTimeout(r, 200));
    }

    return allCommits;
  },
};

export type {
  GitHubUser,
  GitHubRepo,
  CommitActivity,
  ContributorStats,
  CommitSearchResult,
  LanguageStats,
};