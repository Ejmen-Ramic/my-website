import type { VercelRequest, VercelResponse } from "@vercel/node";
import { githubApi, GITHUB_USERNAME } from "./utils/githubClient";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const response = await githubApi.get(`/users/${GITHUB_USERNAME}/repos`, {
      params: { per_page: 100, sort: "updated", type: "owner" }
    });
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}