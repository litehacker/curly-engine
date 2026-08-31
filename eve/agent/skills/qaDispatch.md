---
description: Use when a Jira item in In Review has Architect approval, or a QA webhook/schedule arrives. Call QA immediately.
---

# QA dispatch

When Jira work is in **In Review** and Architect has approved it, do not send it to the Project Manager or a developer. Do not wait for a Test or TESTING status — that name is not on the board.

1. Call `qa` once per issue key. Pack the Jira key, summary, work type, and that staging is the environment (DevOps deploys it). The child does not see this conversation.
2. If several items are ready, call `qa` once per key. Do not start two QA runs on the same key in one turn.
3. Architect `Architect: result` (approved) while the ticket stays in In Review is the signal. You only dispatch.
