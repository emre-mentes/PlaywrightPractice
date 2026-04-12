import { test, expect } from "@playwright/test";


/*
1) Auto-Retrying Assertions (page, locator):
    Her expect(page/locator) fonksiyonu bekledigi kosul saglanana kadar varsayilan(default 5 sn) boyunca tekrar tekrar kontrol eder, Kosul saglanirsa test => pass, timeout süresi icinde kosul saglanmassa test==> fail olur

2) Non-Retrying Assertions (generic assertions):
    Her expect() fonksiyonu o anki degeri anında kontrol eder,
    Beklemez, tekrar denemez,
*/



test("Non-retrying practice", async ({ page }) => {
  // 1. https://the-internet.herokuapp.com/dynamic_controls sayfasina git
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

  // 2. "Remove" butonunu bul.
  const removeButton = page.locator("button[onclick='swapCheckbox()']");

  // 3. "Remove" butonuna tıkla
  await removeButton.click();

  // 4. butonun üzerindeki yazinin Add oldugunu doğrula
  const buttonText = await removeButton.innerText();
  expect(buttonText).toEqual("Add");
});


test("Auto-retrying practice", async ({ page }) => {
  // 1. https://the-internet.herokuapp.com/dynamic_controls sayfasina git
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

  // 2. "Remove" butonunu bul.
  const removeButton = page.locator("button[onclick='swapCheckbox()']");

  // 3. "Remove" butonuna tıkla
  await removeButton.click();

  // 4. butonun üzerindeki yazinin Add oldugunu doğrula
  await expect(removeButton).toHaveText("Add");
  
});