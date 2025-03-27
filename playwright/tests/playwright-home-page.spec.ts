import { test, expect } from "@playwright/test";

test("Has logo exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  const logo = page.getByAltText("Playwright logo");

  await expect(logo).toBeVisible();
});
//Playwright enables reliable end-to-end testing for modern web apps.

test("Has heading exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  //locate heading one by locator tag name
  const headingTitle = page.locator("h1");

  //log in the test results located element value
  console.log((await headingTitle.innerText()).valueOf());

  await expect(headingTitle).toBeVisible();
});
test("Have nav links exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  //locate nav link Docs by role and text
  const docsLink = page.getByRole("link", { name: "Docs" });
  await expect(docsLink).toBeVisible();
});

test("Click Community nav link an check the path", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  //locate nav link Docs by role and text
  const CommunityLink = page.getByRole("link", { name: "Community" });
  //click the located element
  await CommunityLink.click();
  //expect the current
  await expect(page).toHaveURL("htpps://playweight.dev/community/welcome:");

  const headingTwo = page.getByRole("heading", { name: "Ambassadors" });
  await expect(headingTwo).toBeVisible();
});

test("Check if logos lisr exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  //locate logos list by locator class name syntax
  const logosListItems = page.locator("ul.logosList_zAAF li");

  await expect(logosListItems).toHaveCount(9);
});
