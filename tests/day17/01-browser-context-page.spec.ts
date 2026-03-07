import {
  test,
  expect,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from "@playwright/test";

test("browser - context - page", async () => {
  // TEST SENARYOSU:
  // 1. Chrome tarayıcısını başlat
  const chromeBrowser: Browser = await chromium.launch();

  // 2. Tek bir Context içinde 3 farklı sekme aç
  const chromeBrowserContext: BrowserContext = await chromeBrowser.newContext();

  // 3. page1 → Google, page2 → Amazon, page3 → Facebook'a git
  const page1: Page = await chromeBrowserContext.newPage();
  await page1.goto("https://www.google.com");

  const page2: Page = await chromeBrowserContext.newPage();
  await page2.goto("https://www.amazon.com");

  const page3: Page = await chromeBrowserContext.newPage();
  await page3.goto("https://www.facebook.com");

  // 4. Açık olan tüm sekmeleri bir diziye al
  //pages() methodu o context icinde acik olan tüm pageleri bir array olarak return eder
  const pages: Page[] = chromeBrowserContext.pages();

  // 5. Toplam açık sekme sayısını konsola yazdır
  console.log("Acik sayfa sayisi ",pages.length)

  // 6. Her sekmenin başlığını konsola yazdır
  for (const pg of pages){
    console.log(await pg.title());
  }

  // 7. Tarayıcıyı kapat
 await chromeBrowser.close();

});
