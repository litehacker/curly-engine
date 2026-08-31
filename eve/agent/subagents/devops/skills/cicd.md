---
description: Use when setting up or changing GitHub Actions, Vercel deploys, env, or CI health.
---

# CI/CD

Load **env** before any Vercel env, Postgres, or deploy.

- GitHub Actions for check, typecheck, and test on pull requests.
- Vercel for preview, **staging**, and production. Staging must be live before QA. Specialists finish in **In Review** first (Architect, then QA).
- Postgres on Vercel is a **Storage** database (Neon or Prisma Postgres) that injects `DATABASE_URL`. Do not hard-code URLs.
- Secrets stay in GitHub/Vercel env — never in the repo. Frontend/Backend must leave an **Env contract** comment before you deploy.
- If a required var or its source is missing, load **env** and `ask_question` — do not guess.
- Do not merge product feature code. Keep pipelines green and the deploy path obvious.
