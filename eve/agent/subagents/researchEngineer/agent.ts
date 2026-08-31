import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Research engineer for hard algorithms, calculations, and 3D geometry (transcription math, cylinder CAD/STL). Use when Backend needs research on numeric logic or printability — not for APIs or product questions.",
  model: "anthropic/claude-opus-4.8",
});
