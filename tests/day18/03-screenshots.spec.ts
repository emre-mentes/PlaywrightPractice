import { Locator, test } from "@playwright/test";

test("Basic viewport screenshot", async ({ page }) => {
  //techproeducation sayfasina gidelim
  await page.goto("https://www.techproeducation.com");

  //sayfanın ekran görüntüsünü alalim
  await page.screenshot({ path: "screenshots/basic-viewport.png" });
});

test("Full Page screenshot", async ({ page }) => {
  //techproeducation sayfasina gidelim
  await page.goto("https://www.techproeducation.com");

  //sayfanın ekran görüntüsünü alalim
  await page.screenshot({ path: "screenshots/full-page.png",fullPage:true });
  // normalde default olarak fullpage false
});

test("Webelement screenshot", async ({ page }) => {
  //techproeducation sayfasina gidelim
  await page.goto("https://www.techproeducation.com");

  //arama kutusuna playwrihgt yazalim
  const searchBox = page.getByPlaceholder("Search Program");
  await searchBox.fill("Playwright");
  
  //arama kutusunun ekran görüntüsünü alalim
  await searchBox.screenshot({path:"screenshots/searchbox.png"});
  
});

test("Configuration screenshot", async ({ page }) => {
  //techproeducation sayfasina gidelim
  await page.goto("https://www.techproeducation.com");

  //arama kutusuna playwrihgt yazalim
  const searchBox = page.getByPlaceholder("YANLIS LOCATE ALDIK");
  await searchBox.fill("Playwright");

  //arama kutusunun ekran görüntüsünü alalim
  await searchBox.screenshot({ path: "screenshots/searchbox.png" });
});

