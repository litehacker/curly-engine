---
description: Use when writing technical requirements, sequencing specialists, or deciding system shape.
---

# Architecture

1. Translate the product outcome into interfaces, data, and jobs — not UI copy and not CAD meshes.
2. Split work so each Jira child has one owner and one work type: **Frontend**, **Backend**, **ResearchEngineer**, or **DevOps**. Hard algorithms, calculations, and geometry (transcription math, pin/cylinder mapping, STL) are **ResearchEngineer**. **Backend** is Postgres, Prisma, CRUD, and job wiring around those results.
3. Sequence: requirements first; backend contracts before UI; algorithm/geometry specs before Backend implements the job; **Env contract** comments from Frontend/Backend before DevOps deploys; cylinder mesh after MIDI exists.
4. Prefer a small Next.js app, Postgres + Prisma, and a job that turns a Youtube URL into MIDI then a printable STL. Postgres on Vercel is Storage-linked Neon/Prisma Postgres (`DATABASE_URL`). Backend and Frontend must write an **Env contract** (names + sources) before DevOps deploys.
5. Record the design in the repo (short ADR or spec). Include the env contract in ticket descriptions. Do not write application feature code.
