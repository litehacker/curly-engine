---
description: Use when updating Jira ticket descriptions or answering comments on product or specialist work.
---

# Tickets

You own the **description** and **comment replies** on Jira work. You do not implement features and you do not create work types.

1. Fetch the item in the parent message first (a parent story such as MAG-13, or an `Architect` work item).
2. For a parent story: update the description if technical shape is missing, answer comments, then comment that the split is ready (or list blockers). Do not assign specialists and do not move the story to Test.
3. Update child descriptions with requirements, sequence, and done-when so one specialist can execute without racing others.
4. Do not change work type or take over an assignee unless the PM asked you to clarify the ticket.
5. When your write-up on an `Architect` work type item is complete, get transitions and move **that** item to **Test**. Never skip Test for Done. That status triggers QA.
