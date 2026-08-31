import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Architect who reviews Jira items in In Review, writes requirements, and sequences specialist work. Call when status is In Review or when splitting a parent story.",
  model: "anthropic/claude-opus-4.8",
});
