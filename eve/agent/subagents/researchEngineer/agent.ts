import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Research engineer who models the printable pinned music-box cylinder (CAD, STL). Use for 3D geometry and printability, not product questions.",
  model: "anthropic/claude-opus-4.8",
});
