import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.vercel.com",
  description:
    "Vercel: manage projects, deployments, logs, and documentation.",
  auth: {
    getToken: async () => {
      const token = process.env.VERCEL_TOKEN;
      if (!token) {
        throw new Error("Set VERCEL_TOKEN for the Vercel MCP connection.");
      }
      return { token };
    },
  },
});
