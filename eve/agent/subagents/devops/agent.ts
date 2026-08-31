import { defineAgent } from "eve";

export default defineAgent({
  description:
    "DevOps engineer who owns GitHub and Vercel CI/CD, env, and Postgres provisioning. Call for deploys; they will ask you if a required env source is missing.",
  model: "zai/glm-5.3-flash",
});
