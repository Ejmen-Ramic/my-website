import axios from "axios";

const GITHUB_API_BASE = "https://api.github.com";

const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME;

if (!token || !username) {
  throw new Error("Missing GITHUB_TOKEN or GITHUB_USERNAME in environment variables");
}

export const githubApi = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  }
});

export const GITHUB_USERNAME = username;