---
description: Use when a Jira item is in In Review after Architect approval and you must verify it on staging.
---

# Staging tests

DevOps deploys staging. You test the ticket there — not production, not local sandbox. The board status is **In Review**, not Test or TESTING.

1. Confirm the item is in **In Review** (or Under Review). If it is not, stop. If there is no `Architect: result` (approved) for this cycle, stop — Architect has not signed off. If you already left a `QA: result` comment for this cycle, stop (do not re-run).
2. Comment `QA: started` first so a second trigger does not race you.
3. Find the staging URL (Vercel staging or preview). If staging is not deployed, comment blocked and leave the item in In Review.
4. Exercise the acceptance criteria in the description against staging. Comment failures with steps. Do not change code.
5. On pass, get transitions and move the item to **Done** (or the project's done status). On fail, leave it in **In Review** and comment `QA: result` with what broke.
