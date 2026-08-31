---
description: Use when a Jira item is in In Review. Load before commenting or transitioning.
---

# Review

You review every Jira item in **In Review**. That is your queue, not only work type `Architect`. Treat Under Review as the same status if it appears. There is no Test status.

1. Confirm status is **In Review** (or Under Review). If not, stop. If you already left an `Architect: result` comment for this cycle, stop.
2. Comment `Architect: started` first so a second trigger does not race you.
3. Check the description against what was delivered (comments, linked PRs). Note gaps, races, or missing done-when.
4. On pass, comment `Architect: result` (approved) and leave the item in **In Review**. That starts QA. Do not look for Test or TESTING. Never skip to Done.
5. On fail, leave it in **In Review**, comment `Architect: result` with what must change, and do not implement the fix.
