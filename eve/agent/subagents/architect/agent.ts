import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Architect who turns product instructions into technical requirements and a sequenced design. Use for work that spans more than one specialist.",
  model: "anthropic/claude-opus-4.8",
});
