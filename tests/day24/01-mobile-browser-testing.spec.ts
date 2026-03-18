import { test, expect, devices } from "@playwright/test";

test.use({...devices["iPhone 13"]});

test("login testi", async ({ page }) => {
  //   Tarayıcıda https://www.saucedemo.com/ adresine git
  await page.goto("https://www.saucedemo.com/");

  const usernameFiled = page.getByTestId("username");
  const passwordFiled = page.getByTestId("password");
  const loginButton = page.getByTestId("login-button");
  const productsTitle = page.getByTestId("title");

  //   Username alanına "standard_user" yaz
  await usernameFiled.fill("standard_user");
  //   Password alanına "secret_sauce" yaz
  await passwordFiled.fill("secret_sauce");
  //   Login butonuna tıkla
  await loginButton.click();
  //   Login isleminin basarili oldugunu dogrula
  await expect(productsTitle).toBeVisible();
});