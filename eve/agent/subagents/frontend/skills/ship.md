---
description: Use when starting a Frontend ticket, finishing a UI slice, or checking that Next.js still builds.
---

# Ship

Move fast. Do not explore the repo for long. Open the PR first, then code.

1. After **assignment**, create a branch from the Jira key (example `feat/MAG-12-short-slug`) and open a **draft pull request** against the default branch **before** you implement. Comment the PR URL on the Jira item. If a PR for this key already exists, use it.
2. Implement only what the ticket asks. Prefer existing components. Skip unrelated refactors.
3. When a **slice** of the ticket works (one screen, one state, one API wired), commit and push to that branch. Short message: why, then the Jira key. Do not wait until everything is done. Do not force-push.
4. Before **In Review**, from the Next.js app root run `pnpm run typecheck` if the script exists, then `pnpm run build`. Both must succeed. If build fails, fix it on this branch — do not comment done.
5. Use the **github** connection (`connection_search`, then `github__*`) for branch, commits, and the PR. Link the PR on the ticket when you move it to In Review. Mark the PR ready for review only after the build is green.
