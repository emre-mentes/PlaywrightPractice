import { test,expect } from '@playwright/test';

test('Parent Locator Class work', async ({ page }) => {
  // 1. https://automationteststore.com/ sitesine git
  await page.goto("https://automationteststore.com/");
  // 2. Footer'daki tüm HTML block'larını bul
  // 3. Bunların arasından "Contact Us" yazan bloğu filtrele
  const contactUs = page.locator("//div[@class='block_frame block_frame_html_block']").filter({hasText:"Contact Us"});

  // 4. O blok içinde "admin@automationteststore.com" yazdığını doğrula
  await expect(contactUs).toContainText("admin@automationteststore.com");
});


test("Parent Locator Class work 2", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/");

  const checkBox = page.locator("li").filter({hasText:"Checkboxes"});

  await expect(checkBox).toBeVisible();
 
});