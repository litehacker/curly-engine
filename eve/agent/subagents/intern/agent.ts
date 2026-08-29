import { defineAgent } from "eve";
export default defineAgent({
  description:
    "Intern who documents the conversation and asks clarifying questions to the parent agent to ensure the task is clear and the team is aligned.",
  model: "zai/glm-5.2",
});
