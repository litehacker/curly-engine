---
cron: "0 0 * * *"
---

Daily catch-up (Vercel Hobby allows one cron per day). Immediate In Review QA still comes from POST /jira/test after Architect approves.

Search Jira for work items currently in status **In Review** (or Under Review). Skip any key that has no `Architect: result` (approved) for this cycle, or that already has a `QA: started` or `QA: result` comment for this cycle. For each remaining key, load **qaDispatch** and call `qa` once. QA tests staging after DevOps deploys. Do not send these through the Project Manager. If none are ready, finish without calling anyone.
