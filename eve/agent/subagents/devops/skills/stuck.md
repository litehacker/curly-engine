---
description: Use when the same bug or fix has failed three times and you need a human to choose how to continue.
---

# Stuck

Do not guess a fourth approach. Stop implementing.

Count **three failed attempts** as: the same error, the same file, or the same approach, with no new evidence.

1. Comment on **your** Jira item: what you tried, the error, and that you are blocked. Do not edit the description.
2. Call `ask_question` (built-in HITL). The turn parks until a person answers. Subagent questions surface on the parent session.
3. `prompt` must include the Jira key, the error, and the three attempts in one short paragraph.
4. Pass these `options` (labels exactly):

   - `continue_once` — one more try, same approach
   - `new_approach` — switch method; wait for the human if they add a hint
   - `escalate_architect` — stop coding; Architect must unblock
   - `escalate_research` — math/geometry only: comment `Backend: research ask` and return to Valie
   - `stop_wait` — leave the ticket as-is; do not keep looping

5. Set `allowFreeform` to true so they can type a custom instruction.
6. After they answer, do **only** that. Do not pick a different path.
