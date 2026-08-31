---
description: Use when a Jira item enters In Review or an In Review webhook/schedule arrives. Call architect immediately.
---

# Architect dispatch

When Jira work is in **In Review**, call `architect`. Do not send it to the implementer or QA yet.

1. Call `architect` once per issue key. Pack the Jira key, summary, work type, and that they must review (not implement). The child does not see this conversation.
2. If several items are in In Review, call `architect` once per key. Do not start two reviews on the same key in one turn.
3. Specialists moving a ticket to In Review is the signal. You only dispatch. After Architect approves (`Architect: result`), the item stays in **In Review**. Then load **qaDispatch** and call `qa` for that key. There is no Test status.
