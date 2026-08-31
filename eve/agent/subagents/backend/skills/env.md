---
description: Use when adding, changing, or listing environment variables the app needs to run or deploy.
---

# Env contract

DevOps cannot guess secrets. Before any deploy, comment an **Env contract** on your Jira item (and mention the DevOps key if you know it). Names and sources only — never paste secret values.

For each variable:

- **Name** (exact, e.g. `DATABASE_URL`)
- **Required** — yes/no
- **When** — build, runtime, Prisma migrate
- **Public** — yes only for `NEXT_PUBLIC_*`
- **Source** — how DevOps obtains it (not the value)

Keep `.env.example` in sync (names only). Do not put real URLs or keys in git.

## Postgres (`DATABASE_URL`)

Prisma reads `DATABASE_URL`. On Vercel it does **not** come from the repo.

**Source:** Vercel project → Storage → create/link **Neon** or **Prisma Postgres** to Production, Preview, and Development. Linking injects `DATABASE_URL` (Neon may also set `POSTGRES_URL`, `POSTGRES_PRISMA_URL`, `POSTGRES_URL_NON_POOLING`).

If Prisma needs a direct connection for `migrate deploy`, also document `DIRECT_URL` = the non-pooling URL from that store.

Do not invent a local docker URL for staging/production. Do not ask anyone to paste the connection string into chat.

## Other backend vars

If the job needs blob storage, transcription keys, or similar: name them and the **vendor dashboard** that issues them. If only a human can create the key, say so.

Do not move deploy-related work to **In Review** until this comment exists for every `process.env` / Prisma env you added.
