---
description: Use when contributing to assigned Jira work, commenting, or reporting progress. Load before writing code or picking up a ticket.
---

# Contribute

Work only on Jira items **assigned to you** whose **work type** matches your role. That keeps two people off the same change.

Work types: `Product`, `Architect`, `Frontend`, `Backend`, `ResearchEngineer`, `DevOps`, `Intern`.

1. Find your assignment with `connection_search` on **jira**, then `jira__*` tools. If nothing is assigned to you, comment that you are waiting and stop. Do not grab an unassigned or someone else's ticket.
2. Do not edit the description, work type, or assignee. Comment only (questions, blockers, progress). The architect owns the description.
3. Do not create tickets or work types. Do not start a second ticket while one of yours is in progress.
4. Track progress on the ticket: comment when you start, when you block, and when the work is done.
5. When the work is complete, get available transitions and move the ticket to **Test**. Never skip Test for Done. If Test is missing, comment and stop; do not invent a status. Moving to Test is what starts QA on staging.
