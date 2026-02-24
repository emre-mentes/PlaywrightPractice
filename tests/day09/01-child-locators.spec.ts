import { test, expect } from "@playwright/test";

test("Child Locators Class Work", async ({ page }) => {
  //https://automationteststore.com/ sayfasina gidiniz
  await page.goto("https://automationteststore.com/");

  //Latest Product section u icinden baslik bölümünü locate ederek "Latest Products" yazan metni specific olarak locate ediniz
  //Bu elementin görünür oldugunu test ediniz

  //1. yol       //section[@id='latest']//div[@id='block_frame_latest_1770']//span[.='Latest Products']
  const latestProducts1 = page.locator(
    "//section[@id='latest']//div[@id='block_frame_latest_1770']//span[.='Latest Products']",
  );
  await expect(latestProducts1).toBeVisible();

  //2.yol
  const section = page.locator("//section[@id='latest']");
  const div = section.locator("//div[@id='block_frame_latest_1770']");
  const latestProducts2 = div.locator("//span[.='Latest Products']");
  await expect(latestProducts2).toBeVisible();

  //3.yol
  const latestProducts3=page
    .locator("//section[@id='latest']") //section parent
    .locator("//div[@id='block_frame_latest_1770']") //div sectionun childi latest productsun parenti
    .getByText("Latest Products");
  await expect(latestProducts3).toBeVisible();



});