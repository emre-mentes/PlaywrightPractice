import { test, expect } from "@playwright/test";

test("textContent() usage", async ({ page }) => {
  //https://automationteststore.com/ sayfasina gidiniz
  await page.goto("https://automationteststore.com/");

  //Easy Payments metnini locate ediniz
  const rawTitle = await page
    .getByRole("heading", { name: "Easy Payments" })
    .textContent();

  console.log("------" + rawTitle + "---------");

  //Bu elementin Easy Payments icerdigini textContent ile test ediniz
  expect(rawTitle).toContain("Easy Payments");
});

test("innerText() usage", async ({ page }) => {
  //https://automationteststore.com/ sayfasina gidiniz
  await page.goto("https://automationteststore.com/");

  //Easy Payments metnini locate ediniz
  const title = await page
    .getByRole("heading", { name: "Easy Payments" })
    .innerText();

  console.log("------" + title + "---------");

  //Bu elementin Easy Payments icerdigini textContent ile test ediniz
  expect(title).toContain("Easy Payments");
});