---
description: Use when updating Jira ticket descriptions, answering comments, or reviewing In Review work.
---

# Tickets

You own the **description**, **comment replies**, and **In Review** reviews. You do not implement features and you do not create work types.

1. Fetch the item in the parent message first (a parent story such as MAG-13, an `Architect` item, or any item in **In Review**).
2. For a parent story: update the description if technical shape is missing, answer comments, then comment that the split is ready (or listed blockers). Do not assign specialists and do not move the story to Done.
3. For status **In Review**, load **review**. Approve by commenting `Architect: result` (item stays In Review for QA) or leave blockers. There is no Test status.
4. Update child descriptions with requirements, sequence, and done-when so one specialist can execute without racing others. Put transcription math, numeric methods, and cylinder geometry on `ResearchEngineer` children; put APIs and persistence on `Backend`.
5. Do not change work type or take over an assignee unless the PM asked you to clarify the ticket.
6. When your write-up on an `Architect` work type item is ready for review, move **that** item to **In Review** unless this turn is already a review of it — then follow **review**.
