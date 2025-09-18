import axios, { AxiosResponse } from "axios";

const API_BASE =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.REACT_APP_VERCEL_URL || "my-website-lyart-eight.vercel.app"}`
    : "http://localhost:3000"; // CRA/Vite dev server with `vercel dev` proxy

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
  baseURL: `${API_BASE}/api/github`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const githubService = {
  async getUserProfile(): Promise<GitHubUser> {
    const response: AxiosResponse<GitHubUser> = await api.get("/profile");
    return response.data;
  },

  async getUserRepos(): Promise<GitHubRepo[]> {
    const response: AxiosResponse<GitHubRepo[]> = await api.get("/repos");
    return response.data;
  },

  async getRepoCommitActivity(repoName: string): Promise<CommitActivity[]> {
    const response: AxiosResponse<CommitActivity[]> = await api.get(
      `/repos/${repoName}/commit-activity`
    );
    return response.data || [];
  },

  async getRepoContributorStats(repoName: string): Promise<ContributorStats[]> {
    const response: AxiosResponse<ContributorStats[]> = await api.get(
      `/repos/${repoName}/contributors`
    );
    return response.data || [];
  },

  async getLanguageStats(): Promise<LanguageStats> {
    const response: AxiosResponse<LanguageStats> = await api.get("/languages");
    return response.data;
  },

  async getRecentCommits(days: number = 30): Promise<CommitSearchResult[]> {
    const response: AxiosResponse<CommitSearchResult[]> = await api.get(
      "/commits/recent",
      { params: { days } }
    );
    return response.data;
  },

  async getCommitsByYear(year: number): Promise<CommitSearchResult[]> {
    const response: AxiosResponse<CommitSearchResult[]> = await api.get(
      `/commits/${year}`
    );
    return response.data;
  },

  async getCommitsByDateRange(
    startDate: string,
    endDate: string
  ): Promise<CommitSearchResult[]> {
    const response: AxiosResponse<CommitSearchResult[]> = await api.get(
      "/commits/range",
      { params: { startDate, endDate } }
    );
    return response.data;
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