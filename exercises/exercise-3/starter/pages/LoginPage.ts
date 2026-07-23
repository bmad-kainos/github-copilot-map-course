import type { Page, Locator } from "@playwright/test";

/**
 * Page Object for the sample login page.
 *
 * Fill in the TODOs below using the model you're currently testing. The
 * README asks you to generate this three times (Auto, a fast model, and a
 * reasoning model) and compare the results — so keep each version's notes in
 * RESULTS.md.
 *
 * Selectors you can rely on in app/index.html:
 *   #username        - the username input
 *   #password        - the password input
 *   #login-button    - the submit button
 *   #welcome         - success message ("Welcome, <user>")
 *   #error           - error message ("Invalid credentials")
 */
export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    // TODO: define locators for the username, password, button,
    // welcome message and error message.
  }

  /** Navigate to the login page. */
  async goto(): Promise<void> {
    // TODO: implement (hint: this.page.goto("/"))
    throw new Error("not implemented");
  }

  /** Fill in the credentials and submit the form. */
  async login(username: string, password: string): Promise<void> {
    // TODO: implement
    throw new Error("not implemented");
  }

  /** Return the visible welcome message text after a successful login. */
  welcomeMessage(): Locator {
    // TODO: implement
    throw new Error("not implemented");
  }

  /** Return the visible error message locator after a failed login. */
  errorMessage(): Locator {
    // TODO: implement
    throw new Error("not implemented");
  }
}
