import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.githubcopilot.com/mcp/",
  description:
    "GitHub: repositories, files, pull requests, issues, and Actions.",
  auth: {
    getToken: async () => {
      const token = process.env.GITHUB_TOKEN;
      if (!token) {
        throw new Error("Set GITHUB_TOKEN for the GitHub MCP connection.");
      }
      return { token };
    },
  },
});
