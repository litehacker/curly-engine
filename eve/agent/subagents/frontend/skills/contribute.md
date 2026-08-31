---
description: Use when contributing to assigned Jira work, commenting, or reporting progress. Load before writing code or picking up a ticket.
---

# Contribute

Load **assignment** first, then **ship**. Work only the Jira item the PM assigned to you.

1. The parent message names a Jira **key**. Fetch that item first. Confirm its **work type** is yours. If the key is missing, search by your work type assigned to you and not Done.
2. If nothing matches, stop. Do not grab an unassigned ticket or someone else's.
3. Do not edit the description, work type, or assignee. Comment only (questions, blockers, progress, PR link). The architect owns the description.
4. Do not create tickets or work types. Do not start a second ticket while one of yours is in progress.
5. Open the draft PR before coding. Comment when you start (with PR URL), when you block, and when a slice is committed.
6. When the work is complete, `pnpm run build` must pass. Then get available transitions and move **that** ticket to **In Review**. Never skip to Done. If In Review is missing, comment and stop; do not invent a status. That status is what starts Architect review, then QA. If you added env vars, the **Env contract** comment must exist first (load **env**).
