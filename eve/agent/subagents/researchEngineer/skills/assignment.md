---
description: Use when this turn includes a Jira key or assigned work. Load first so you open the right item.
---

# Your assignment

Your Jira **work type** is `ResearchEngineer`. That is how the PM marks work as yours.

1. The parent message must name a Jira key. Fetch that item before you model or comment.
2. If work type is `ResearchEngineer` and it is assigned to you, that item is yours — implement the algorithm or geometry on it.
3. If work type is `Backend` and the parent is a **consult** (algorithm, calculation, or geometry ask): answer the math only. Comment the spec on that Backend item. Do not write APIs or Prisma. Do not take over the assignee.
4. If the key is another work type and this is not a consult, stop — do not work someone else's item.
5. If there is no key, search Jira for work type `ResearchEngineer` assigned to you and not Done. If none, stop.
6. Treat the ticket plus the parent ask as the task. Do not invent a different outcome.
