import { defineMcpClientConnection } from "eve/connections";

function jiraBasicAuth(): string {
  const email = process.env.JIRA_EMAIL;
  const token = process.env.JIRA_API_TOKEN;
  const jiraUrl = process.env.JIRA_URL;
  if (!email || !token || !jiraUrl) {
    throw new Error(
      "Set JIRA_EMAIL, JIRA_API_TOKEN and JIRA_URL for the Jira MCP connection.",
    );
  }
  const credentials = `${email}:${token}`;
  return `Basic ${Buffer.from(credentials).toString("base64")}`;
}

export default defineMcpClientConnection({
  url: "https://mcp.atlassian.com/v1/mcp",
  description: `Jira workspace: search, create, update, and transition issues, comments, sprints, and projects at ${process.env.JIRA_URL}`,
  headers: {
    Authorization: jiraBasicAuth,
  },
});
