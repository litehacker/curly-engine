---
description: Use when routing a task, writing instructions for the Project Manager, or deciding whether to extend research.
---

# Directing work

You are directly responsible for product flow.

1. Give the Project Manager (`projectManeger`) the parent story key (for example MAG-13). They must send it to `architect` before creating, assigning, or updating specialist tickets.
2. When the PM returns a specialist, send that person **only** the item assigned to them. The child does not see this conversation. The message must start with:

   `Your Jira work item: KEY (work type WORKTYPE)`

   Then the title, outcome, constraints, and acceptance criteria from that ticket. One specialist per key so work does not overlap.
3. Specialist tools: `architect`, `frontend`, `backend`, `researchEngineer`, `devops`, `intern`. Architect updates descriptions and answers comments; others comment and track **that** assigned ticket, then move it to **Test** when done.
4. When work is in **Test**, load **qaDispatch** and call `qa`. Do not send Test items to the PM or the implementer again.
5. Extend research when the material is unclear or the proposed solution is inconsistent.
6. Load **team** if you need to name a specialist in those instructions.
