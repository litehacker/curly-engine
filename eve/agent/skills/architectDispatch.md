---
description: Use when a Jira item enters Under Review or an Under Review webhook/schedule arrives. Call architect immediately.
---

# Architect dispatch

When Jira work is in **Under Review**, call `architect`. Do not send it to the implementer or QA yet.

1. Call `architect` once per issue key. Pack the Jira key, summary, work type, and that they must review (not implement). The child does not see this conversation.
2. If several items are in Under Review, call `architect` once per key. Do not start two reviews on the same key in one turn.
3. Specialists moving a ticket to Under Review is the signal. You only dispatch. After Architect approves, the item goes to **Test** and QA runs.
