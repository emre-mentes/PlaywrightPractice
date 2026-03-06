import { test, expect } from "@playwright/test";

test("multiple select dropdown classwork", async ({ page }) => {
  // 1. https://mehmet-alatas.github.io/qatest/Dropdowns.html sayfasına git
  await page.goto("https://mehmet-alatas.github.io/qatest/Dropdowns.html");

  // 2. Value ile Python ve Java seçeneklerini seç
  const multiSelectDropDown=page.locator("#multi-select");
  await multiSelectDropDown.selectOption(["python","java"]);

  // 3. Python ve Java'nın seçili olduğunu toHaveValues ile doğrula
  await expect(multiSelectDropDown).toHaveValues(["python", "java"]);
});