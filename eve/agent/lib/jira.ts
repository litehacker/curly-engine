import { defineMcpClientConnection } from "eve/connections";

function jiraBasicAuth(): string {
  const email = process.env.JIRA_EMAIL;
  const token = process.env.JIRA_API_TOKEN;
  if (!email || !token) {
    throw new Error(
      "Set JIRA_EMAIL and JIRA_API_TOKEN for the Jira MCP connection.",
    );
  }
  return `Basic ${Buffer.from(`${email}:${token}`).toString("base64")}`;
}

export default defineMcpClientConnection({
  url: "https://mcp.atlassian.com/v1/mcp",
  description:
    "Jira workspace: search, create, update, and transition issues, comments, sprints, and projects.",
  headers: {
    Authorization: jiraBasicAuth,
  },
});
