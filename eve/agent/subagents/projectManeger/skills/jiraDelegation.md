---
description: Use when creating Jira work, work types, or assigning specialists. Load before any Jira write.
---

# Jira delegation

Delegate with **work types**, not labels. Work type is the Jira issue type. Specialists read it to know whose ticket it is.

Required work types (create any that are missing in the project, then use them):

- `Product` — one parent item to complete the product
- `Architect`
- `Frontend`
- `Backend`
- `ResearchEngineer`
- `DevOps`
- `Intern`

1. Search existing work types first. Create only what is missing. If you cannot create them, stop and report that; do not fake types with labels.
2. You may create a general `Product` item to complete the product. Split it into child items, one work type per specialist. One assignee per child.
3. Assign so the work type matches the specialist (`Frontend` → `frontend`, `Backend` → `backend`, `DevOps` → `devops`, `Intern` → `intern`, `ResearchEngineer` → `researchEngineer`, `Architect` → `architect`).
4. Do not implement. Leave descriptions thin if needed; the architect updates them and answers comments.
5. Do not put two specialists on the same child. Do not open a second child for the same outcome and work type.
6. When a specialist finishes, they move the item to **Test**. Do not close it as Done for them. If **Test** is not on the workflow, add or request that status before calling work complete. **Test** triggers QA on staging.
