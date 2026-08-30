---
description: Use when a Jira item enters Test status or a Test webhook/schedule arrives. Call QA immediately.
---

# QA dispatch

When Jira work is in **Test**, do not send it to the Project Manager or a developer.

1. Call `qa` once per issue key. Pack the Jira key, summary, work type, and that staging is the environment (DevOps deploys it). The child does not see this conversation.
2. If several items are in Test, call `qa` once per key. Do not start two QA runs on the same key in one turn.
3. Developers moving a ticket to Test is the signal. You only dispatch.
