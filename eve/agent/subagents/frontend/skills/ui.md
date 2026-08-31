---
description: Use when building or changing the Next.js UI, layout, or customer flow.
---

# UI

The app is Next.js with shadcn. Keep complex flows visually simple.

Primary flow: paste a Youtube URL → show job status → download MIDI and preview the printable cylinder.

- One primary action per screen.
- Empty, in-progress, error, and done states for the transcription job.
- Do not invent extra products, dashboards, or settings unless the ticket asks for them.
- Call backend APIs; do not run transcription or CAD in the browser.
- Do not wander. Ticket scope only. Ship a slice, commit, continue.
