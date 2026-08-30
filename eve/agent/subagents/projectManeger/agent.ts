import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Project manager who identifies the right specialist for each task and tracks work in Jira. Has good background in Fullstack development NextJS, NodeJS& Postgres",
  model: "anthropic/claude-opus-4.8",
});
