import { test, expect } from "@playwright/test";

test("login testi", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const usernameFiled = page.getByTestId("username");
  const passwordFiled = page.getByTestId("password");
  const loginButton = page.getByTestId("login-button");
  const productsTitle = page.getByTestId("title");

  await usernameFiled.fill("standard_user");
  await passwordFiled.fill("secret_sauce");
  await loginButton.click();

  await expect(productsTitle).toBeVisible();
});