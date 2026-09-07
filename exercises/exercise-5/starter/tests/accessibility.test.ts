import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pageUrl = `file://${path.resolve(__dirname, '../app/index.html')}`;

// ---------------------------------------------------------------------------
// This file is the accessibility harness for Exercise 5.
//
// Step 1 — run the tests as-is to see what axe-core reports:
//   npm test
//
// Step 2 — ask Copilot to explain each violation, then fix the HTML.
//
// Step 3 — run again and iterate until the critical / serious violations
//           are gone and the assertions below pass.
//
// Tip: axe-core tags map to WCAG success criteria (e.g. "wcag2aa").
//      Ask Copilot: "explain this axe violation and how to fix it in HTML"
// ---------------------------------------------------------------------------

test('page has no critical or serious axe violations', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(pageUrl);

    const results = await new AxeBuilder({ page })
      .setLegacyMode()
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    // TODO: after fixing the HTML, this assertion should pass with 0 violations.
    // While you are working through the fixes, comment it out and use the
    // detailed assertion below to see what's left.
    const criticalOrSerious = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalOrSerious.length > 0) {
      console.log('\nRemaining violations:');
      for (const v of criticalOrSerious) {
        console.log(`  [${v.impact}] ${v.id}: ${v.description}`);
        for (const node of v.nodes) {
          console.log(`    → ${node.html}`);
        }
      }
    }

    assert.equal(
      criticalOrSerious.length,
      0,
      `${criticalOrSerious.length} critical/serious axe violation(s) remain — see output above`
    );
  } finally {
    await browser.close();
  }
});

test('page has no missing image alt text', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(pageUrl);

    const results = await new AxeBuilder({ page })
      .setLegacyMode()
      .withRules(['image-alt'])
      .analyze();

    const violations = results.violations;
    if (violations.length > 0) {
      console.log('\nimage-alt violations:');
      for (const v of violations) {
        for (const node of v.nodes) {
          console.log(`  → ${node.html}`);
        }
      }
    }

    assert.equal(violations.length, 0, 'All images must have alt text');
  } finally {
    await browser.close();
  }
});

test('interactive elements are keyboard-accessible', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(pageUrl);

    const results = await new AxeBuilder({ page })
      .setLegacyMode()
      .withTags(['cat.keyboard'])
      .analyze();

    // TODO: fix the non-button interactive elements in index.html, then
    // uncomment the strict assertion below.
    // assert.equal(results.violations.length, 0, 'All interactive elements must be keyboard-accessible');
    console.log(
      `keyboard-accessible check: ${results.violations.length} violation(s) found`
    );
  } finally {
    await browser.close();
  }
});
