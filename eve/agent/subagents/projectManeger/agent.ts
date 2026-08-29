import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Project manager who identifies the right specialist for each task and tracks work in Jira.",
  model: "zai/glm-5.3-flash",
});
