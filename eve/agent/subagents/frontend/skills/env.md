---
description: Use when adding, changing, or listing environment variables the UI needs to run or deploy.
---

# Env contract

DevOps cannot guess secrets. Before any deploy, comment an **Env contract** on your Jira item (and mention the DevOps key if you know it). Names and sources only — never paste secret values.

For each variable:

- **Name** (exact, e.g. `NEXT_PUBLIC_APP_URL`)
- **Required** — yes/no
- **When** — build (Next inlines `NEXT_PUBLIC_*`) or runtime
- **Public** — yes only for `NEXT_PUBLIC_*`
- **Source** — how DevOps obtains it (not the value)

Keep `.env.example` in sync (names only). Do not put real URLs or keys in git.

If the browser calls a separate API host, document that base URL as `NEXT_PUBLIC_*` and say it is the Vercel staging/production URL DevOps will set after the first deploy (placeholder until then).

Do not move deploy-related work to **In Review** until this comment exists for every `process.env` you added.
