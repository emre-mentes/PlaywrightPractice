import { test, expect } from "@playwright/test";

// test.describe bloğu ile bu üç testi "Basit Kontrol Testleri" başlığı altında grupluyoruz.
test.describe("Basit Kontrol Testleri Grubu", () => {

  // --- 1. Başarılı Test (Geçer) ---
  // Bu testin geçmesi beklenir.
  test("basarili_kontrol_testi", async ({ page }) => {
    //
    await page.goto("https://playwright.dev/docs/intro"); 
    // Sayfa başlığında "Playwright" kelimesi geçiyor mu? (Geçer)
    await expect(page).toHaveTitle(/Playwright/);
    console.log("Basarili Test 1: Geçti.");
  }); 


  // --- 2. Başarısız Test (Kalır) ---
  // Bu testin bilerek kalması (fail olması) beklenir.
  test("bilerek_kalan_kontrol_testi", async ({ page }) => {
    await page.goto("https://playwright.dev/docs/intro"); 
    // Sayfa başlığında "Yanlış Başlık" kelimesi geçiyor mu? (Geçmez, Hata verir)
    // expect() içinde yanlış bir beklenti (assertion) yazıyoruz.
    await expect(page).toHaveTitle(/Yanlis Baslik/);
    console.log("Basarisiz Test: Bu satir calismaz, test burada kalir (Fail).");
  });


});