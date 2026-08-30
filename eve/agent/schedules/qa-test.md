---
cron: "*/5 * * * *"
---

Search Jira for work items currently in status **Test**. For each issue key that does not already have a `QA: started` or `QA: result` comment for this Test cycle, load **qaDispatch** and call `qa` once with that key. QA tests staging after DevOps deploys. Do not send these through the Project Manager. If none are in Test, finish without calling anyone.
