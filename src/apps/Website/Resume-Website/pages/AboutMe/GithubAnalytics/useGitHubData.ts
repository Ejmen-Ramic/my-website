import { useState, useEffect } from 'react';
import { format, parseISO} from 'date-fns';
import { CommitSearchResult, GitHubRepo, githubService, GitHubUser, LanguageStats } from '../../../../../../backend/githubService';
import { t } from '@lingui/macro';

export interface CommitByDate {
  date: string;
  commits: number;
  year?: number; 
}

export interface RepoStat {
  name: string;
  value: number;
}

export interface LanguageStat {
  name: string;
  value: number;
}

export interface TopRepo {
  name: string;
  stars: number;
  forks: number;
  language: string;
}

export const useGitHubData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [commitActivity, setCommitActivity] = useState<CommitByDate[]>([]);
  const [languageStats, setLanguageStats] = useState<LanguageStat[]>([]);
  const [recentCommits, setRecentCommits] = useState<CommitSearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const [profileData, reposData] = await Promise.all([
        githubService.getUserProfile(),
        githubService.getUserRepos(),
      ]);

      setProfile(profileData);
      setRepos(reposData);

      const [commits2024, commits2025, recentCommitsData] = await Promise.all([
        githubService.getCommitsByYear(2024),
        githubService.getCommitsByYear(2025),
        githubService.getRecentCommits(90),
      ]);

      setRecentCommits(recentCommitsData);

      const languageData: LanguageStats = await githubService.getLanguageStats();
      const languageArray: LanguageStat[] = Object.entries(languageData)
        .map(([name, value]) => ({ name, value: Number(value) }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 8);
      setLanguageStats(languageArray);

      const allCommits = [...commits2024, ...commits2025];
      const commitsByDate = processCommitsByDate(allCommits);
      setCommitActivity(commitsByDate);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : t`An unknown error occurred`;
      setError(errorMessage);
      console.error(t`Error fetching GitHub data:`, err);
    } finally {
      setLoading(false);
    }
  };

  const processCommitsByDate = (commits: CommitSearchResult[]): CommitByDate[] => {
    const commitsByDate: { [key: string]: number } = {};

    commits.forEach((commit) => {
      const date = format(parseISO(commit.commit.committer.date), 'yyyy-MM-dd');
      commitsByDate[date] = (commitsByDate[date] || 0) + 1;
    });

    return Object.entries(commitsByDate)
      .map(([date, commits]) => ({ 
        date, 
        commits,
        year: new Date(date).getFullYear() // Add year field
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getRepoStats = (): RepoStat[] => {
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    return [
      { name: t`Public Repos`, value: repos.length },
      { name: t`Total Stars`, value: totalStars },
      { name: t`Total Forks`, value: totalForks },
            { name: t`Total Commits`, value: recentCommits.length },

      
    ];
  };

  const getTopRepos = (): TopRepo[] => {
    return repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10)
      .map((repo) => ({
        name: repo.name,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Unknown',
      }));
  };

const getCommitStats = () => {
  const stats: { [year: number]: number } = {};

  commitActivity.forEach((c) => {
    if (!c.year) return;
    stats[c.year] = (stats[c.year] || 0) + c.commits; 
  });

  return stats;
};


  const totalLangBytes = languageStats.reduce((s, d) => s + d.value, 0) || 1;

  return {
    loading,
    error,
    profile,
    commitActivity,
    languageStats,
    totalLangBytes,
    recentCommits,
    getRepoStats,
    getTopRepos,
    getCommitStats
  };
};

export default useGitHubData;