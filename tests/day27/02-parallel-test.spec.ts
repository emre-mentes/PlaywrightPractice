import { test } from "@playwright/test";

// Bu dosya tek bir spec dosyasıdır.
// playwright.config.ts içinde fullyParallel: false ayarlandığında
// bu dosyadaki testler SIRAYLA çalışır.
// Yani A bitmeden B başlamaz, B bitmeden C başlamaz.
// Toplam süre: 5 + 5 + 5 = 15 saniye olur.

//Bu dosyadaki tüm testler serial olarak sırasiyla calissin demis olduk
//config.ts dosyamizdaki   fullyParallel: true, olsa bile bu dosyadaki ayar override eder ve bu dosya serial calisir
test.describe.configure({mode:"serial"});


test("A - Login testi", async ({ page }) => {
  console.log("➡ A Login testi başladı");
  await page.waitForTimeout(5000);
  console.log("✅ A Login testi bitti");
});

test("B - Ürünler testi", async ({ page }) => {
  console.log("➡ B Ürünler testi başladı");
  await page.waitForTimeout(5000);
  console.log("✅ B Ürünler testi bitti");
});

test("C - Sepet testi", async ({ page }) => {
  console.log("➡ C Sepet testi başladı");
  await page.waitForTimeout(5000);
  console.log("✅ C Sepet testi bitti");
});