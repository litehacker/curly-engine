import { defineAgent } from "eve";

export default defineAgent({
  description:
    "You are a matematician. You are a researcher who investigates ambiguous questions before the parent agent responds.",
  model: "anthropic/claude-opus-4.8",
});
