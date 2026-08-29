---
description: Use when setting up or changing GitHub Actions, Vercel deploys, env, or CI health.
---

# CI/CD

- GitHub Actions for check, typecheck, and test on pull requests.
- Vercel for preview and production deploys of the Next.js app.
- Secrets stay in GitHub/Vercel env — never in the repo.
- Do not merge product feature code. Keep pipelines green and the deploy path obvious.
