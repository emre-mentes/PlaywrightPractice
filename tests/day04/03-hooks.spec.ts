import { test, expect } from "@playwright/test";

// HOOKS - Tüm test dosyası için geçerli
test.beforeAll(async () => {
  console.log(
    "BEFORE ALL: Test dosyası başlamadan ÖNCE - Sadece 1 kez çalışır (En başta)",
  ); // Veritabanı bağlantısı, global ayarlar burada yapılır
});

test.afterAll(async () => {
  console.log(
    "AFTER ALL: Tüm testler bittikten SONRA - Sadece 1 kez çalışır (En sonda)",
  ); // Genel temizlik işlemleri
});

test.beforeEach(async ({ page }) => {
  console.log(
    "BEFORE EACH: Her testten ÖNCE çalışır - Kaç test varsa o kadar çalışır",
  ); // Her test öncesi ana sayfaya git
});
test.afterEach(async ({ page }) => {
  console.log(
    "AFTER EACH: Her testten SONRA çalışır - Kaç test varsa o kadar çalışır",
  ); // Her test sonrası çıkış yap (eğer giriş yapılmışsa)
});

// İLK TEST
test("İlk Test - Logo kontrolü", async ({ page }) => {
  console.log("TEST 1: Logo kontrolü testi çalışıyor"); // Test kodları burada
});

// İKİNCİ TEST
test("İkinci Test - Menü linkleri çalışıyor", async ({ page }) => {
  console.log("TEST 2: Menü linkleri testi çalışıyor"); // Test kodları burada
});

// ÜÇÜNCÜ TEST
test("Üçüncü Test - Arama özelliği", async ({ page }) => {
  console.log("TEST 3: Arama özelliği testi çalışıyor"); // Test kodları burada
});