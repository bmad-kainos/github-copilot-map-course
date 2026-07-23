/**
 * Exercise 6 — minimal REST API (starter).
 *
 * A tiny, dependency-free HTTP API built on Node's `http` module so the agent
 * can scaffold a new endpoint, test it, and document it end-to-end.
 *
 * Existing endpoints:
 *   GET  /tasks         -> list all tasks
 *   POST /tasks         -> create a task ({ "title": string })
 *   GET  /tasks/:id     -> fetch one task
 *
 * The agent-mode task (see TASK.md) is to add DELETE /tasks/:id.
 */
import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";

export interface Task {
  id: number;
  title: string;
  done: boolean;
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
  const tasks = new Map<number, Task>();
  let nextId = 1;

  return createServer(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    const parts = url.pathname.split("/").filter(Boolean);
    const isTasks = parts[0] === "tasks";

    // GET /tasks
    if (req.method === "GET" && isTasks && parts.length === 1) {
      return sendJson(res, 200, [...tasks.values()]);
    }

    // POST /tasks
    if (req.method === "POST" && isTasks && parts.length === 1) {
      const body = (await readJson(req)) as { title?: unknown } | null;
      if (!body || typeof body.title !== "string" || body.title.trim() === "") {
        return sendJson(res, 400, { error: "title is required" });
      }
      const task: Task = { id: nextId++, title: body.title, done: false };
      tasks.set(task.id, task);
      return sendJson(res, 201, task);
    }

    // GET /tasks/:id
    if (req.method === "GET" && isTasks && parts.length === 2) {
      const id = Number(parts[1]);
      const task = tasks.get(id);
      if (!task) return sendJson(res, 404, { error: `Task ${id} not found` });
      return sendJson(res, 200, task);
    }

    // TODO (agent): add DELETE /tasks/:id
    //   - 204 No Content when the task existed and was removed
    //   - 404 { error } when it does not exist

    return sendJson(res, 404, { error: "Not found" });
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT ?? 3000);
  createApp().listen(port, () => console.log(`Tasks API on http://localhost:${port}`));
}
