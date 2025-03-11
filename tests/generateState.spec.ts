import { test } from "@playwright/test";

test("Generate the storageState - accept cookies ", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("/");

  const consentButton = page.locator("#onetrust-reject-all-handler");
  if (await consentButton.isVisible()) {
    await consentButton.click();
  }

  const statePath = "tests/.state/state.json";
  await context.storageState({ path: statePath });
  await context.close();
});