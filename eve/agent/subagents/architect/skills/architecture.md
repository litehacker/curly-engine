---
description: Use when writing technical requirements, sequencing specialists, or deciding system shape.
---

# Architecture

1. Translate the product outcome into interfaces, data, and jobs — not UI copy and not CAD meshes.
2. Split work so each Jira child has one owner and one work type: **Frontend**, **Backend**, **ResearchEngineer**, or **DevOps**.
3. Sequence: requirements first; backend contracts before UI; cylinder geometry after MIDI exists; CI/CD when there is something to deploy.
4. Prefer a small Next.js app, Postgres + Prisma, and a job that turns a Youtube URL into MIDI then a printable STL.
5. Record the design in the repo (short ADR or spec). Do not write application feature code.
