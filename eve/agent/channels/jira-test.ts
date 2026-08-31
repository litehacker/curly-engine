import { timingSafeEqual } from "node:crypto";

import { defineChannel, POST } from "eve/channels";

function secretsEqual(given: string, expected: string): boolean {
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    return false;
  }
  return timingSafeEqual(a, b);
}

function webhookAuthorized(request: Request): boolean {
  const expected = process.env.JIRA_WEBHOOK_SECRET;
  if (!expected) {
    return false;
  }
  const given =
    request.headers.get("x-webhook-secret") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    "";
  return secretsEqual(given, expected);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }
  return value as Record<string, unknown>;
}

function issueKeyFromBody(body: unknown): string | null {
  const root = asRecord(body);
  if (!root) {
    return null;
  }
  if (typeof root.key === "string" && root.key.length > 0) {
    return root.key;
  }
  if (typeof root.issueKey === "string" && root.issueKey.length > 0) {
    return root.issueKey;
  }
  const issue = asRecord(root.issue);
  if (issue && typeof issue.key === "string" && issue.key.length > 0) {
    return issue.key;
  }
  return null;
}

function statusNameFromBody(body: unknown): string {
  const root = asRecord(body);
  if (!root) {
    return "";
  }
  const issue = asRecord(root.issue);
  const fields = issue ? asRecord(issue.fields) : null;
  const status = fields ? asRecord(fields.status) : null;
  if (typeof status?.name === "string") {
    return status.name;
  }
  const changelog = asRecord(root.changelog);
  const items = changelog?.items;
  if (!Array.isArray(items)) {
    return "";
  }
  for (const item of items) {
    const row = asRecord(item);
    if (!row) {
      continue;
    }
    const field = typeof row.field === "string" ? row.field : "";
    const toName = row["toString"];
    if (field === "status" && typeof toName === "string") {
      return toName;
    }
  }
  return "";
}

function isInReviewStatus(name: string): boolean {
  const n = name.trim().toLowerCase();
  return n === "in review" || n === "under review";
}

export default defineChannel({
  turnPolicy: "queue",
  routes: [
    POST("/jira/test", async (request, { from }) => {
      if (!webhookAuthorized(request)) {
        return Response.json({ error: "unauthorized" }, { status: 401 });
      }
      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return Response.json({ error: "invalid json" }, { status: 400 });
      }
      if (!isInReviewStatus(statusNameFromBody(body))) {
        return Response.json({ ignored: true, reason: "not-in-review" });
      }
      const key = issueKeyFromBody(body);
      if (!key) {
        return Response.json({ error: "missing issue key" }, { status: 400 });
      }
      const prompt = [
        "Jira work ",
        key,
        " is in status In Review.",
        " Fetch comments.",
        " If there is no Architect: result (approved) for this cycle, do not call qa — Architect review comes first.",
        " If Architect has approved and there is no QA: started or QA: result for this cycle, load **qaDispatch** and call `qa` once with this issue key.",
        " QA tests staging after DevOps deploys.",
        " Do not route this through the Project Manager.",
      ].join("");
      const session = await from(key).send(prompt, { auth: null });
      return Response.json({ sessionId: session.id, key });
    }),
    POST("/jira/review", async (request, { from }) => {
      if (!webhookAuthorized(request)) {
        return Response.json({ error: "unauthorized" }, { status: 401 });
      }
      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return Response.json({ error: "invalid json" }, { status: 400 });
      }
      if (!isInReviewStatus(statusNameFromBody(body))) {
        return Response.json({ ignored: true, reason: "not-in-review" });
      }
      const key = issueKeyFromBody(body);
      if (!key) {
        return Response.json({ error: "missing issue key" }, { status: 400 });
      }
      const prompt = [
        "Jira work ",
        key,
        " is in status In Review.",
        " Load **architectDispatch** and call `architect` once with this issue key.",
        " They review the item. Do not route this through the Project Manager or QA.",
      ].join("");
      const session = await from(key).send(prompt, { auth: null });
      return Response.json({ sessionId: session.id, key });
    }),
  ],
});
