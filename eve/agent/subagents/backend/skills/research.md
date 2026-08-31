---
description: Use when a Backend ticket needs an algorithm, calculation, or geometry you do not already have a spec for.
---

# Research

Hard math belongs to the team `researchEngineer` (work type `ResearchEngineer`). You do not have that specialist as a child. You wire jobs and APIs around their result.

When the ticket needs transcription/pitch/timing math, a numeric method, or cylinder/pin geometry:

1. Comment on **your** Backend item: `Backend: research ask` plus the unknown, constraints, and snippets.
2. Stop implementing that part. Return the same ask to the parent so Valie can call `researchEngineer`.
3. Do not invent pitch detection, mapping math, or meshes.

When a spec is already on the ticket (or in the parent message), use it. If `researchEngineer` says CAD/STL needs its own ticket, leave that on your comment and do not implement a generator.
