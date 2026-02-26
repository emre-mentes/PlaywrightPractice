import { test ,expect} from '@playwright/test';

test('non-retrying practice', async ({ page }) => {
  // 1. https://mehmet-alatas.github.io/qatest/Wait.html sayfasına git.
  await page.goto("https://mehmet-alatas.github.io/qatest/Wait.html");

  // 2. "10s delay" butonuna tıkla (element 10 saniye sonra görünür olacak).
  await page.getByRole("button", { name: "Show Element (10s delay)" }).click();

  // 3. isVisible() ile elementin görünür olup olmadığını ANINDA kontrol et.
  const isVisible : boolean =await page.getByText("Element Appeared!").isVisible();

  // 4. Element Appeared! yazisinin görünür olduğunu doğrula
  expect(isVisible).toBe(true);

});



test("auto-retrying practice", async ({ page }) => {
  // 1. https://mehmet-alatas.github.io/qatest/Wait.html sayfasına git.
  await page.goto("https://mehmet-alatas.github.io/qatest/Wait.html");

  // 2. "10s delay" butonuna tıkla (element 10 saniye sonra görünür olacak).
  await page.getByRole("button", { name: "Show Element (10s delay)" }).click();

  // 3. isVisible() ile elementin görünür olup olmadığını ANINDA kontrol et.
  // 4. Element Appeared! yazisinin görünür olduğunu doğrula
  await expect(page.getByText("Element Appeared!")).toBeVisible({timeout:15000});
  //playwright.config.ts dosyamisdaki expect icin ayarladigimiz 6000 ms yeterli gelmedigi icin süreyi 15000 ms olarak override ettik

});