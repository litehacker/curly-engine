---
cron: "0 1 * * *"
---

Daily catch-up (Vercel Hobby allows one run per day). Immediate Under Review still comes from POST /jira/review.

Search Jira for work items currently in status **Under Review** or **In Review**. For each issue key that does not already have an `Architect: started` or `Architect: result` comment for this cycle, load **architectDispatch** and call `architect` once with that key. They review; they do not implement. If none are under review, finish without calling anyone.
