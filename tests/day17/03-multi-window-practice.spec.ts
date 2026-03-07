import { test, expect } from "@playwright/test";
test("multi window practice", async ({ page, context }) => {
  // ╔══════════════════════════════════════════════════════════════╗
  // ║              TEST CASE: Fake Mail ile Login                  ║
  // ╠══════════════════════════════════════════════════════════════╣
  // ║ TC-001: Fake email adresi ile login işlemi başarılı olmalı   ║
  // ╠══════════════════════════════════════════════════════════════╣
  // ║ PRECONDITIONS:                                               ║
  // ║   - https://www.tutorialspoint.com erişilebilir olmalı       ║
  // ║   - https://www.fakemail.net erişilebilir olmalı             ║
  // ╠══════════════════════════════════════════════════════════════╣
  // ║ TEST STEPS:                                                  ║
  // ║   1. Tutorialspoint login sayfasına git                      ║
  // ║   2. Yeni sekmede fakemail.net'i aç                          ║
  // ║   3. Fake email adresinin yüklenmesini bekle                 ║
  // ║   4. Email adresini oku                                      ║
  // ║   5. Tutorialspoint sekmesine geri dön                       ║
  // ║   6. Email ve şifreyi forma doldur                           ║
  // ║   7. Login butonuna tıkla                                    ║
  // ╠══════════════════════════════════════════════════════════════╣
  // ║ EXPECTED RESULT:                                             ║
  // ║   "Welcome, Login In" mesajı görünür olmalı                  ║
  // ╚══════════════════════════════════════════════════════════════╝

  await page.goto("https://www.tutorialspoint.com/selenium/practice/login.php");

  //mevcut browser oturumunda yeni sekme actik
  const newPage = await context.newPage();
  await newPage.goto("https://www.fakemail.net");

  await expect(newPage.locator("#email")).toBeVisible();

  const fakeEmail = await newPage.locator("#email").innerText();

  await page.getByPlaceholder("UserName").fill(fakeEmail);
  await page.getByPlaceholder("Password").fill("FakePassword123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Welcome, Login In")).toBeVisible();
});