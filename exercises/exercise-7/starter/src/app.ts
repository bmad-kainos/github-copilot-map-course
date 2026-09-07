/**
 * Exercise 7 — minimal REST API (starter).
 *
 * A tiny, dependency-free HTTP API built on Node's `http` module so the agent
 * can scaffold a new endpoint, test it, and document it end-to-end.
 *
 * Existing endpoints:
 *   GET  /tests         -> list all test cases
 *   POST /tests         -> register a test case ({ "name": string })
 *   GET  /tests/:id     -> fetch one test case
 *
 * The agent-mode task (see TASK.md) is to add DELETE /tests/:id, for
 * retiring a test case that's no longer needed.
 */
import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";

export interface TestCase {
  id: number;
  name: string;
  automated: boolean;
}

function sendJson(res: ServerResponse, status: number, body: unknown): void {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(body));
}

function readJson(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve(null);
      }
    });
  });
}

export function createApp(): Server {
  const testCases = new Map<number, TestCase>();
  let nextId = 1;

  return createServer(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    const parts = url.pathname.split("/").filter(Boolean);
    const isTests = parts[0] === "tests";

    // GET /tests
    if (req.method === "GET" && isTests && parts.length === 1) {
      return sendJson(res, 200, [...testCases.values()]);
    }

    // POST /tests
    if (req.method === "POST" && isTests && parts.length === 1) {
      const body = (await readJson(req)) as { name?: unknown } | null;
      if (!body || typeof body.name !== "string" || body.name.trim() === "") {
        return sendJson(res, 400, { error: "name is required" });
      }
      const testCase: TestCase = { id: nextId++, name: body.name, automated: false };
      testCases.set(testCase.id, testCase);
      return sendJson(res, 201, testCase);
    }

    // GET /tests/:id
    if (req.method === "GET" && isTests && parts.length === 2) {
      const id = Number(parts[1]);
      const testCase = testCases.get(id);
      if (!testCase) return sendJson(res, 404, { error: `Test case ${id} not found` });
      return sendJson(res, 200, testCase);
    }

    // TODO (agent): add DELETE /tests/:id
    //   - 204 No Content when the test case existed and was removed
    //   - 404 { error } when it does not exist

    return sendJson(res, 404, { error: "Not found" });
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT ?? 3000);
  createApp().listen(port, () => console.log(`Test Case API on http://localhost:${port}`));
}
