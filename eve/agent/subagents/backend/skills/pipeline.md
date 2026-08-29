---
description: Use when building or changing the Youtube-to-MIDI transcription job or MIDI output.
---

# Pipeline

A customer submits a Youtube URL they own the right to use. Persist a job, process it asynchronously, and store MIDI the frontend can download.

1. Accept a URL and create a job (`queued` → `running` → `done` | `failed`).
2. Obtain audio from that URL, transcribe pitch and timing, write a MIDI file.
3. Expose job status and the MIDI artifact. Cylinder geometry is **researchEngineer** work; pass MIDI (notes, times, duration), not a mesh.
4. Keep algorithms in the backend. Fail the job with a clear error; do not hang the request.
