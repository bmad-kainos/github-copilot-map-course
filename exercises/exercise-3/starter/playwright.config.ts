import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for the Exercise 3 model bake-off.
 * Starts the sample login app automatically on http://localhost:4173.
 * Works the same in a Codespace or local VS Code.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
  },
  webServer: {
    command: "node server.mjs",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
