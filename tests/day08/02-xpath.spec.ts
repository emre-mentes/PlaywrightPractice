import { test, expect } from "@playwright/test";

test("xpath practice", async ({ page }) => {
  // 1. https://the-internet.herokuapp.com/add_remove_elements/ adresine git
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

  // 2. Add Element butonuna bas
  await page.locator("//button[.='Add Element']").click();

  // 3. Delete butonunun görünür olduğunu doğrula
  await expect(page.locator("//button[.='Delete']")).toBeVisible();

  // 4. Delete butonuna bas
  await page.locator("//button[.='Delete']").click();

  // 5. "Add/Remove Elements" yazısının görünür olduğunu doğrula
  await expect(page.locator("//h3[.='Add/Remove Elements']")).toBeVisible();

});