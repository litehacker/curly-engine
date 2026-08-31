import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Frontend engineer who builds the Next.js UI fast: draft PR first, commit each slice, keep the app buildable. Use for UI, UX, and shadcn work.",
  model: "zai/glm-5.3-flash",
});
