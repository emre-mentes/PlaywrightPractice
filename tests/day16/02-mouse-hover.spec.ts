import { test, expect } from "@playwright/test";
test("mouse hover action", async ({ page }) => {
  // Site   : https://mehmet-alatas.github.io/qatest/actionsClickDrag.html
  await page.goto(
    "https://mehmet-alatas.github.io/qatest/actionsClickDrag.html",
  );

  // Eylem  : "Hover Over Me" yazısının üzerine fare getirilir
  const hoverOverText = page.getByText("Hover Over Me");
  await hoverOverText.hover(); //bu method mouse pointerini ilgili webelementin üzerine götürme eylemini simüle eder

  // Beklenti: "Mouse is over the box" mesajı görünür hale gelir
  await expect(page.getByText("Mouse is over the box")).toBeVisible();
});

test("mouse hover action practice", async ({ page }) => {
  // 1. Go to Amazon https://www.amazon.com/
  await page.goto("https://www.amazon.com/");

  // 2. Go to the "Account & Lists" menu in the upper right section (Hover Action)
  const accountLists = page.getByRole("link", { name: "Account & Lists" });
  await accountLists.hover();

  // 3. Click on the "Account" option in the opened menu
  await page.getByRole("link", { name: "Account", exact: true }).click();

  // 4. Verify that the title of the opened page contains “Your Account”
  await expect(page).toHaveTitle("Your Account");
});
