import { test, expect } from "@playwright/test";

// Wrap all tests within a describe block to improve structure.
import describe from "@playwright/test";

// Add a beforeEach hook to avoid repeating page.goto() in every test.
test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
});

test.describe("Basic HTML Form Tests", () => {
  test("Has h1 title", async ({ page }) => {

    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });
});

test("Test usernem field", async ({ page }) => {

  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("testUser");
  await expect(usernameInput).toHaveValue("testUser");
});

test("Test Checkbox selection", async ({ page }) => {

  const checkboxEl = page.locator("xpath=//input[@value='cb2']");
  await expect(checkboxEl).toBeVisible();
  await checkboxEl.check();
  await expect(checkboxEl).toBeChecked();
});

// After the checkbox test, add a similar test for Radio Items.

test("Test Radio button selection", async ({ page }) => {
    const radioEl = page.locator('xpath=//input[@value="rd1"]');
    await expect(radioEl).toBeVisible();
    await radioEl.check();
    await expect(radioEl).toBeChecked();
  });

test("Select dropdown option", async ({ page }) => {
      
  const dropdown = page.locator("xpath=//select[@name='dropdown']");
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption("dd2");
  await expect(dropdown).toHaveValue("dd2");
});

// Locate the Password field, fill it with a test value, and validate the input.

test("Locate the Password field", async ({ page }) => {

  const passwordField = page.locator("xpath=//input[@name='password']");
  await expect(passwordField).toBeVisible();
  await passwordField.fill("testUser");
  await expect(passwordField).toHaveValue("testUser");
});

// Locate the TextArea field, fill it with a test value, and validate the input.

test("TextAreaField", async ({ page }) => {

  const textAreaField = page.locator("xpath=//textArea[@name='comments']");
  await expect(textAreaField).toBeVisible();
  await textAreaField.fill("testTest");
  await expect(textAreaField).toHaveValue("testTest");
});

//Finally, submit the form by locating the input with type="submit" and triggering a click action.

test("Submitting the form", async ({ page }) => {

  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("testUser");
  await expect(usernameInput).toHaveValue("testUser");

  const passwordField = page.locator("xpath=//input[@name='password']");
  await expect(passwordField).toBeVisible();
  await passwordField.fill("testUser");
  await expect(passwordField).toHaveValue("testUser");

  const submitButton = page.locator("xpath=//input[@value='submit']");
  await expect(submitButton).toBeVisible();
  await submitButton.click();
});
