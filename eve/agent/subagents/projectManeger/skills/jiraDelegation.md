---
description: Use when creating Jira work, work types, or assigning specialists. Load before any Jira write. Architect must review the parent story first.
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

1. Fetch the parent story first (for example MAG-13). Do not create, assign, or update specialist children until `architect` has reviewed that story and commented that the split is ready (or listed blockers). If that comment is missing, stop.
2. Search existing work types first. Create only what is missing. If you cannot create them, stop and report that; do not fake types with labels.
3. After Architect signs off, you may use the story as parent or open a `Product` item. Split into child items, one work type per specialist. One assignee per child.
4. Assign so the work type matches the specialist (`Frontend` → `frontend`, `Backend` → `backend`, `DevOps` → `devops`, `Intern` → `intern`, `ResearchEngineer` → `researchEngineer`, `Architect` → `architect`). Put the specialist tool name and Jira key in a comment on the item.
5. Do not implement. The architect updates descriptions and answers comments.
6. Do not put two specialists on the same child. Do not open a second child for the same outcome and work type.
7. When a specialist finishes, they move the item to **Under Review**. Architect reviews it, then **Test** (QA). Do not close it as Done for them. If **Under Review** is not on the workflow, add or request that status.
8. Tell Valie `specialist`, `workType`, `key`, and `title` for every child you assigned. That is how the specialist knows which item is theirs.
