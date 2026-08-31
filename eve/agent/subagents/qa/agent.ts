import { defineAgent } from "eve";

export default defineAgent({
  description:
    "QA who tests Jira work in staging after DevOps deploys. Call when an item is in In Review and Architect has approved it.",
  model: "zai/glm-5.3-flash",
});
