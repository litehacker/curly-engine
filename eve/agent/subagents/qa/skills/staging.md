---
description: Use when a Jira item is in Test and you must verify it on staging.
---

# Staging tests

DevOps deploys staging. You test the ticket there — not production, not local sandbox.

1. Confirm the item is in **Test**. If it is not, stop. If you already left a `QA: result` comment for this Test cycle, stop (do not re-run).
2. Comment `QA: started` first so a second trigger does not race you.
3. Find the staging URL (Vercel staging or preview). If staging is not deployed, comment blocked and leave the item in Test.
4. Exercise the acceptance criteria in the description against staging. Comment failures with steps. Do not change code.
5. On pass, get transitions and move the item to **Done** (or the project's done status). On fail, leave it in **Test** and comment `QA: result` with what broke.
