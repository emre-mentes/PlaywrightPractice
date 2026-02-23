import { test, expect } from "@playwright/test";

test("css selector practice", async ({ page }) => {
  // 1. https://the-internet.herokuapp.com/add_remove_elements/ adresine git
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

  // 2. Add Element butonuna bas
  await page.locator("button[onclick='addElement()']").click();


  // 3. Delete butonunun görünür olduğunu doğrula
  await expect(page.locator("button[onclick='deleteElement()']")).toBeVisible();

  // 4. Delete butonuna bas
  await page.locator("button[onclick='deleteElement()']").click();

  // 5. "Add/Remove Elements" yazısının görünür olduğunu doğrula
  await expect(page.locator("h3")).toBeVisible();

});