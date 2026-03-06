import { test, expect } from "@playwright/test";

// 1. TEST SENARYOSU
test("simple alert", async ({ page }) => {
  // 1. https://testcenter.techproeducation.com/index.php?page=javascript-alerts sayfasına gidiniz.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=javascript-alerts",
  );
  // 2. Birinci butona tıkla ve Alert'i tetikle.
  await page.getByRole("button", { name: "Click for JS Alert" }).click();

  // 3. Sonuç mesajının You successfully clicked an alert  olduğunu doğrula.
  const resultMessage = page.locator("#result");
  await expect(resultMessage).toHaveText("You successfully clicked an alert");
  //successfully icerdigini doğrula.
  await expect(resultMessage).toContainText("successfully");
});

// 2. TEST SENARYOSU
test("confirm alert", async ({ page }) => {
  // 1. https://testcenter.techproeducation.com/index.php?page=javascript-alerts sayfasına gidiniz.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=javascript-alerts",
  );
  // 2. İkinci butona tıkla ve Confirm Alert'i tetikle.
  await page.getByRole("button", { name: "Click for JS Confirm" }).click();

  // 3. Sonuç mesajının You clicked: Cancel olduğunu doğrula.
  const resultMessage = page.locator("#result");
  await expect(resultMessage).toHaveText("You clicked: Cancel");
});

// 3. TEST SENARYOSU
test("prompt alert", async ({ page }) => {
  // 1. https://testcenter.techproeducation.com/index.php?page=javascript-alerts sayfasına gidiniz.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=javascript-alerts",
  );
  // 2. Üçüncü butona tıkla ve Prompt Alert'i tetikle.
  await page.getByRole("button", { name: "Click for JS Prompt" }).click();

  // 3. Sonuç mesajının You entered icerdigini doğrula.
  const resultMessage = page.locator("#result");
  await expect(resultMessage).toContainText("You entered");
});