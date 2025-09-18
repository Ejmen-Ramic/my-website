import type { VercelRequest, VercelResponse } from "@vercel/node";
import { githubApi, GITHUB_USERNAME } from "../utils/githubClient";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { year } = req.query;
  if (!year) return res.status(400).json({ error: "Year is required" });

  try {
    const startDate = `${year}-01-01`;
    const endDate = `${year}-12-31`;

    let allCommits: any[] = [];
    let page = 1;
    const perPage = 100;

    while (page <= 10) {
      const response = await githubApi.get("/search/commits", {
        params: {
          q: `author:${GITHUB_USERNAME} committer-date:${startDate}..${endDate}`,
          sort: "committer-date",
          order: "desc",
          per_page: perPage,
          page
        }
      });

      const commits = response.data.items;
      if (!commits.length) break;

      allCommits = [...allCommits, ...commits];
      if (commits.length < perPage) break;

      page++;
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    res.status(200).json(allCommits);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}