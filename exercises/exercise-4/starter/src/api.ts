/**
 * Exercise 4 — In-memory Task API (starter).
 *
 * A tiny, framework-free service so the exercise stays self-contained.
 * Each method represents an API operation.
 *
 * Your job: add the missing `completeTask` operation, test-first.
 */

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

/** Thrown when an operation references a task id that does not exist. */
export class TaskNotFoundError extends Error {
  constructor(id: number) {
    super(`Task ${id} not found`);
    this.name = "TaskNotFoundError";
  }
}

export class TaskApi {
  private tasks = new Map<number, Task>();
  private nextId = 1;

  /**
   * Create a new task.
   *
   * @param title - Human-readable task title.
   * @returns The newly created task, including its generated id.
   */
  createTask(title: string): Task {
    const task: Task = { id: this.nextId++, title, done: false };
    this.tasks.set(task.id, task);
    return task;
  }

  /**
   * List all tasks in insertion order.
   *
   * @returns An array of every task currently stored.
   */
  listTasks(): Task[] {
    return [...this.tasks.values()];
  }

  /**
   * Fetch a single task by id.
   *
   * @param id - The id of the task to retrieve.
   * @returns The matching task.
   * @throws {TaskNotFoundError} If no task has the given id.
   */
  getTask(id: number): Task {
    const task = this.tasks.get(id);
    if (!task) {
      throw new TaskNotFoundError(id);
    }
    return task;
  }

  // ---------------------------------------------------------------
  // TODO: implement completeTask
  //
  // completeTask(id: number): Task should mark the matching task as
  // done (done = true) and return it, throwing TaskNotFoundError when
  // the id does not exist.
  //
  // Follow the workflow in the exercise README:
  //   1. Write a failing test in tests/api.test.ts first (/tests)
  //   2. Implement here using inline completions
  //   3. Refactor with /fix
  //   4. Document with /doc (add a /** ... */ block above the method)
  // ---------------------------------------------------------------
}
