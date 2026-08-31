---
description: Use when designing Prisma schema, Postgres tables, or CRUD APIs.
---

# Data

- Postgres with Prisma.
- Integer IDs use `@id @default(autoincrement())`; string IDs use `@default(cuid())`.
- Include `createdAt` and `updatedAt`.
- Define both sides of every relation with `@relation`.
- Index fields that jobs and status polls will query (`@@index`).
- Unique constraints on fields that must be unique (`@unique` / `@@unique`).
- Jobs have a durable status the frontend can poll. Do not put MIDI blobs in the hot path if a URL or object key will do.
- Prisma uses `DATABASE_URL`. Document it in an **Env contract** (load **env**). DevOps provisions it via Vercel Storage (Neon or Prisma Postgres), not from the repo.
