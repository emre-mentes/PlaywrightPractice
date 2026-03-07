import { test, expect } from "@playwright/test";

test("iframe practice", async ({ page }) => {
  // TEST SENARYOSU:
  // 1. https://www.letskodeit.com/practice sayfasına git
  await page.goto("https://www.letskodeit.com/practice");

  // 2. "courses-iframe" id'li iframe'in içine gir
  const iframe = page.frameLocator("#courses-iframe");

  // 3. iframe içindeki arama kutusuna "api" yaz
  const frameSearchBox = iframe.getByPlaceholder("Search Course");
  await frameSearchBox.fill("api");

  // 4. Enter'a bas
  await frameSearchBox.press("Enter");

  // 5. "Rest API Automation With Rest Assured" metninin görünür olduğunu doğrula
  await expect(
    iframe.getByText("Rest API Automation With Rest Assured"),
  ).toBeVisible();
});