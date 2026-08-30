---
description: Use when a Jira item is in Under Review. Load before commenting or transitioning.
---

# Review

You review every Jira item in **Under Review**. That is your queue, not only work type `Architect`.

1. Confirm status is **Under Review** (or In Review). If not, stop. If you already left an `Architect: result` comment for this cycle, stop.
2. Comment `Architect: started` first so a second trigger does not race you.
3. Check the description against what was delivered (comments, linked PRs). Note gaps, races, or missing done-when.
4. On pass, comment `Architect: result` (approved) and move the item to **Test**. That starts QA. Never skip to Done.
5. On fail, leave it in **Under Review**, comment `Architect: result` with what must change, and do not implement the fix.
