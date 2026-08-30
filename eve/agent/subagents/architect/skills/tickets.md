---
description: Use when updating Jira ticket descriptions, answering comments, or reviewing Under Review work.
---

# Tickets

You own the **description**, **comment replies**, and **Under Review** reviews. You do not implement features and you do not create work types.

1. Fetch the item in the parent message first (a parent story such as MAG-13, an `Architect` item, or any item in **Under Review**).
2. For a parent story: update the description if technical shape is missing, answer comments, then comment that the split is ready (or list blockers). Do not assign specialists and do not move the story to Test.
3. For status **Under Review**, load **review**. Approve to **Test** or leave in Under Review with blockers.
4. Update child descriptions with requirements, sequence, and done-when so one specialist can execute without racing others.
5. Do not change work type or take over an assignee unless the PM asked you to clarify the ticket.
6. When your write-up on an `Architect` work type item is ready for review, move **that** item to **Under Review** unless this turn is already a review of it — then follow **review**.
