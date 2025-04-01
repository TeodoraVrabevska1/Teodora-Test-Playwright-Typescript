import { test, expect } from "@playwright/test";
test.describe("Playwright home page testing", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);
  });
  test("Has logo exist", async ({ page }) => {
    // get image by alt text
    const logo = page.getByAltText("Playwright logo").first();
    await expect(logo).toBeVisible();
  });
  test("Has heading exist", async ({ page }) => {
    // Locate heading one by locator tag name
    const headingTitle = page.locator("h1");
    // Log in the test results located element value
    console.log((await headingTitle.innerText()).valueOf());
    await expect(headingTitle).toBeVisible();
  });
  test("Have nav links exist", async ({ page }) => {
    // Locate nav link Docs by role and text
    const docsLink = page.getByRole("link", { name: "Docs" });
    const apiLink = page.getByRole("link", { name: "API" });
    await expect(docsLink).toBeVisible();
    await expect(apiLink).toBeVisible();
  });
  test("Click community link and check the path", async ({ page }) => {
    // Locate nav link Community by role and text
    const communityLink = page.getByRole("link", { name: "Community" });
    // Click the located element
    await communityLink.click();
    // Expect the current page to have passed URL
    await expect(page).toHaveURL("https://playwright.dev/community/welcome");
    const headingTwo = page.getByRole("heading", { name: "Ambassadors" });
    await expect(headingTwo).toBeVisible();
  });
  test("Select Playwright environment from the list", async ({ page }) => {
    const initialEnv = page.getByRole("button", { name: "Node.js" });
    await initialEnv.hover();
    const envList = page.locator(".dropdown__menu");
    await expect(envList).toBeVisible();
    const listItem = page.locator("ul.dropdown__menu li").getByText("Python");
    await listItem.click();
    // await expect(page).toHaveURL("https://playwright.dev/pyton/");
  });
  test("Test if UL exist", async ({ page }) => {
    // Locate logos list by locator class name syntax
    const logosListItems = page.locator("ul.logosList_zAAF li");
    // Expect the count of list items
    await expect(logosListItems).toHaveCount(9);
  });
});