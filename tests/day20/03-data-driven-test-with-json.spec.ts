import { test, expect } from "@playwright/test";

import credentials from "../../test-data/login-test-data.json";
//credentials json dosyasindaki tüm credentiallari iceren bir arraydir

for (const user of credentials) {

  test(`login testi ${user.username}`, async ({ page }) => {
    //   Tarayıcıda https://www.saucedemo.com/ adresine git
    await page.goto("https://www.saucedemo.com/");

    const usernameFiled = page.getByTestId("username");
    const passwordFiled = page.getByTestId("password");
    const loginButton = page.getByTestId("login-button");
    const productsTitle = page.getByTestId("title");

    //   Username alanına "standard_user" yaz
    await usernameFiled.fill(user.username);
    //   Password alanına "secret_sauce" yaz
    await passwordFiled.fill(user.password);
    //   Login butonuna tıkla
    await loginButton.click();
    //   Login isleminin basarili oldugunu dogrula
    await expect(productsTitle).toBeVisible();
  });
}

// ╔══════════════════════════════════════════════════════════════╗
// ║        TEST CASE: Data Driven Login Testi (JSON'dan)         ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ TC-001: standard_user ile login başarılı olmalı              ║
// ║ TC-002: visual_user ile login başarılı olmalı                ║
// ║ TC-003: performance_glitch_user ile login başarılı olmalı    ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ PRECONDITIONS:                                               ║
// ║   - https://www.saucedemo.com erişilebilir olmalı            ║
// ║   - test-data/login-test-data.json mevcut olmalı             ║
// ╚══════════════════════════════════════════════════════════════╝