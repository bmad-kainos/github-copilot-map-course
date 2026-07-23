import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";

/**
 * Exercise 3 — Model bake-off.
 *
 * Generate the body of these tests THREE times using different model tiers
 * (Auto, a fast/lightweight model, and a reasoning model) via the model
 * picker, then record what differed in RESULTS.md.
 *
 * Valid demo credentials: standard_user / secret_sauce
 */

test.describe("login flow", () => {
  test("a valid user can sign in", async ({ page }) => {
    const login = new LoginPage(page);
    // TODO: use the LoginPage to sign in with valid credentials and
    // assert the welcome message is visible and greets the user.
    throw new Error("not implemented");
  });

  test("an invalid user sees an error", async ({ page }) => {
    const login = new LoginPage(page);
    // TODO: attempt to sign in with bad credentials and assert the
    // error message is visible.
    throw new Error("not implemented");
  });
});
