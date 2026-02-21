import { test, expect } from "@playwright/test";

test("Built-in Locators Practice", async ({ page }) => {
  //  1. OrangeHRM ana giriş sayfasını ziyaret et.https://opensource-demo.orangehrmlive.com/
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  //  2. Giriş panelinde "Login" başlığının görünür olduğunu doğrula.
  await expect(
    page.getByRole("heading", { name: "Login", level: 5 }),
  ).toBeVisible();

  //  3. Kullanıcı adı alanına "Admin" bilgisini gir.
  await page.getByPlaceholder("Username").fill("Admin");

  //  4. Şifre alanına (Password) "admin123" bilgisini gir.
  await page.getByPlaceholder("Password").fill("admin123");

  //  5. Giriş butonuna tıklayarak sisteme giriş yap.
  await page.getByRole("button").click();

  //  6. Ana sayfanın yüklendiğini "Dashboard" başlığı üzerinden doğrula.
  //Dashboard yazisina sahip mi?
  await expect(
    page.getByRole("heading", { name: "Dashboard", level: 6 }),
  ).toHaveText("Dashboard");

  //board yazisini iceriyor mu?
  await expect(
    page.getByRole("heading", { name: "Dashboard", level: 6 }),
  ).toContainText("board");

  //  7. Yan menüdeki "My Info" bağlantısına (link) tıkla.
  await page.getByRole("link", { name: "My Info" }).click();

  //  8. Kişisel bilgiler sayfasının geldiğini "PIM" başlığını görerek doğrula.
  await expect(page.getByRole("heading", { name: "PIM" })).toBeVisible();
});