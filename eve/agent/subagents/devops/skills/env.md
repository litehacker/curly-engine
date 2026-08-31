---
description: Use when setting Vercel/GitHub env, provisioning Postgres, or a required secret/source is missing.
---

# Env and Vercel setup

Load this before you deploy. You set CI and env; you do not invent product features or secret values.

## What you set up

1. **GitHub** — repo, Actions for check/typecheck/test on PRs. Secrets for Actions live in GitHub Environment/Repository secrets, never in the repo.
2. **Vercel project** — link the GitHub repo. Preview deploys on PRs; **staging** and **production** as named environments. QA tests **staging**.
3. **Env vars** — only from **Env contract** comments on Frontend/Backend Jira items (names + sources). Copy names into Vercel → Settings → Environment Variables for Production, Preview, and Development as the contract says. Never commit values.
4. **Postgres (`DATABASE_URL`)** — Backend will list this. Obtain it by provisioning, not by guessing:
   - Vercel project → **Storage** → create **Neon** or **Prisma Postgres**.
   - Connect that store to this project for Production, Preview, and Development.
   - Vercel injects `DATABASE_URL` (and often `POSTGRES_URL` / `POSTGRES_PRISMA_URL` / `POSTGRES_URL_NON_POOLING`).
   - If the contract asks for `DIRECT_URL`, set it from the **non-pooling** URL so `prisma migrate deploy` can run.
   - Do not paste connection strings into Jira, git, or chat.
5. **Human-issued keys** (transcription, etc.) — you cannot mint these. Ask (below).

## Before you deploy

- Read Frontend and Backend **Env contract** comments on the parent story or sibling tickets. If either is missing, do not deploy.
- Confirm `.env.example` matches those names.
- Confirm staging will have every **required** var.

## If something is missing

Stop. Comment the blocker on **your** DevOps ticket. Then call `ask_question` so the human sees exactly what you need. `prompt` must list:

- Jira key
- What is missing (name + why the deploy fails without it)
- Where it normally comes from (e.g. Vercel Storage → Neon → `DATABASE_URL`)
- What you already did
- What they must do (dashboard click, create a key, confirm Storage is linked). Tell them **not** to paste secrets into the prompt if Vercel can inject them.

Options (labels exactly):

- `storage_linked` — Postgres is linked in Vercel Storage; retry
- `provision_postgres` — create Neon/Prisma Postgres on this Vercel project
- `i_set_in_vercel` — I will set the vars in the Vercel UI; retry when I say done
- `need_env_contract` — send Backend/Frontend back; no Env contract yet
- `here_is_source` — I will name the dashboard/vendor (freeform) without pasting the secret
- `stop_wait`

Set `allowFreeform` true. After they answer, do **only** that. Do not invent `DATABASE_URL` or other secrets.
