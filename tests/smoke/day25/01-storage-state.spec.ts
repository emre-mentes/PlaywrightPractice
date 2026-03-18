import { test, expect } from "@playwright/test";

// TEST SENARYOSU 1: Kullanıcı ürünleri görebilir
// 1. Inventory sayfasına git
// 2. URL'nin inventory içerdiğini doğrula
// 3. Sayfada 6 ürün göründüğünü doğrula
test("kullanici ürünleri görebilir", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByTestId("inventory-item")).toHaveCount(6);
});