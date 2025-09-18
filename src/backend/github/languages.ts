import type { VercelRequest, VercelResponse } from "@vercel/node";
import { githubApi, GITHUB_USERNAME } from "./utils/githubClient";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const reposResponse = await githubApi.get(`/users/${GITHUB_USERNAME}/repos`, {
      params: { per_page: 100, sort: "updated", type: "owner" }
    });

    const repos = reposResponse.data;
    const languageStats: { [key: string]: number } = {};

    for (const repo of repos) {
      try {
        const response = await githubApi.get(`/repos/${GITHUB_USERNAME}/${repo.name}/languages`);
        const languages = response.data;

        Object.entries(languages).forEach(([language, bytes]) => {
          languageStats[language] = (languageStats[language] || 0) + (bytes as number);
        });

        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (err) {
        continue;
      }
    }

    res.status(200).json(languageStats);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}