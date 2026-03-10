import { test, expect } from "@playwright/test";

const credentials = [
  { username: "standard_user", password: "secret_sauce" }, // 1. kullanıcı
  { username: "visual_user", password: "secret_sauce" }, // 2. kullanıcı
  { username: "performance_glitch_user", password: "secret_sauce" }, // 3. kullanıcı
];


//ikinci yol for each loop
credentials.forEach((credential) => {
  test(`login testi ${credential.username} ikinci yol`, async ({ page }) => {
    //   Tarayıcıda https://www.saucedemo.com/ adresine git
    await page.goto("https://www.saucedemo.com/");

    const usernameFiled = page.getByTestId("username");
    const passwordFiled = page.getByTestId("password");
    const loginButton = page.getByTestId("login-button");
    const productsTitle = page.getByTestId("title");

    //   Username alanına "standard_user" yaz
    await usernameFiled.fill(credential.username);
    //   Password alanına "secret_sauce" yaz
    await passwordFiled.fill(credential.password);
    //   Login butonuna tıkla
    await loginButton.click();
    //   Login isleminin basarili oldugunu dogrula
    await expect(productsTitle).toBeVisible();
  });
});

//1. yol for of loop
for (const credential of credentials) {
  test(`login testi ${credential.username}`, async ({ page }) => {
    //   Tarayıcıda https://www.saucedemo.com/ adresine git
    await page.goto("https://www.saucedemo.com/");

    const usernameFiled = page.getByTestId("username");
    const passwordFiled = page.getByTestId("password");
    const loginButton = page.getByTestId("login-button");
    const productsTitle = page.getByTestId("title");

    //   Username alanına "standard_user" yaz
    await usernameFiled.fill(credential.username);
    //   Password alanına "secret_sauce" yaz
    await passwordFiled.fill(credential.password);
    //   Login butonuna tıkla
    await loginButton.click();
    //   Login isleminin basarili oldugunu dogrula
    await expect(productsTitle).toBeVisible();
  });
}