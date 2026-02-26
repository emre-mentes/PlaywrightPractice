import { test ,expect} from '@playwright/test';
import { exec } from 'node:child_process';

test('non-retrying practice', async ({ page }) => {
  // 1. https://the-internet.herokuapp.com/dynamic_loading/1 sayfasina git
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

  // 2. "Start" butonuna tıkla
  await page.getByRole("button",{name:"Start"}).click();

  // 3. Hello World! yazisinin görünür olup olmadigini kontrol et
  const isVisible : boolean= await page.getByText("Hello World!").isVisible();

  expect(isVisible).toBe(true);
});

test("auto-retrying practice", async ({ page }) => {
  // 1. https://the-internet.herokuapp.com/dynamic_loading/1 sayfasina git
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

  // 2. "Start" butonuna tıkla
  await page.getByRole("button", { name: "Start" }).click();

  // 3. Hello World! yazisinin görünür olup olmadigini kontrol et
  await expect(page.getByText("Hello World!")).toBeVisible();


});