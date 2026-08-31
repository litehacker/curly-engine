---
description: Use when routing a task, writing instructions for the Project Manager, or deciding whether to extend research.
---

# Directing work

You are directly responsible for product flow.

1. Give the Project Manager (`projectManeger`) the parent story key (for example MAG-13). They must send it to `architect` before creating, assigning, or updating specialist tickets.
2. When the PM returns a specialist, send that person **only** the item assigned to them. The child does not see this conversation. The message must start with:

   `Your Jira work item: KEY (work type WORKTYPE)`

   Then the title, outcome, constraints, and acceptance criteria from that ticket. One specialist per key so work does not overlap.
3. Specialist tools: `architect`, `frontend`, `backend`, `researchEngineer`, `devops`, `intern`. Architect updates descriptions, answers comments, and reviews items in **Under Review**. Others comment and track **that** assigned ticket, then move it to **Under Review** when done.
4. Send **hard algorithms, calculations, and geometry** (transcription math, numeric methods, cylinder/pins/STL) to `researchEngineer`, not `backend`. Backend owns APIs and job plumbing. When they return a `Backend: research ask`, call `researchEngineer` with that ask and the Backend Jira key (consult). After a spec comes back, send `backend` the same key plus the spec. If CAD/STL needs its own ticket, instruct the PM to open a `ResearchEngineer` child.
5. When work is in **Under Review**, load **architectDispatch** and call `architect`. When work is in **Test**, load **qaDispatch** and call `qa`. Do not send those items back to the implementer.
6. Extend research when the material is unclear or the proposed solution is inconsistent.
7. Load **team** if you need to name a specialist in those instructions.
