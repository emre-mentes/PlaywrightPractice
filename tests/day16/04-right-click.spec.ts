import { test, expect } from "@playwright/test";
test.only("right click", async ({ page }) => {
  // 1. https://demoqa.com/buttons sayfasına git
  await page.goto("https://demoqa.com/buttons");

  // 2. "Right Click Me" butonunu bul
  const rightClickButton = page.getByRole("button", { name: "Right Click Me" });

  // 3. Butona sağ tıkla
  //{ button: "right" } parametresi sayesinde artik sag tiklama yapar
  await rightClickButton.click({ button: "right" });

  // 4. "You have done a right click" mesajının görünür olduğunu doğrula
  await expect(page.getByText("You have done a right click")).toBeVisible();
});
