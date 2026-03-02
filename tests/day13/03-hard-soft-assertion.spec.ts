import { test, expect } from "@playwright/test";

test("hard assertion ", async ({ page }) => {
  // 1. "https://mehmet-alatas.github.io/qatest/" adresine git
  await page.goto("https://mehmet-alatas.github.io/qatest/");

  // 2. Sayfanın URL'sinin "https://mehmet-alatas.github.io/qatest/" olduğunu doğrula
  await expect(page, "Sayfa Urli bekelenen degerle eslesmiyor").toHaveURL(
    "https://mehmet-alatas.github.io/qatest/",
  );

  // 3. Sayfanın başlığının "Yanlis Title" olduğunu doğrula
  await expect(page, "Sayfa basligi beklenen degerle eslesmiyor").toHaveTitle(
    "Yanlis Title",
  );

  // 4. "QA Portal" bağlantısının görünür olduğunu doğrula
  await expect(
    page.getByRole("link", { name: "QA Portal" }),
    "QA portal baglantisi sayfada görünmüyor",
  ).toBeVisible();

  // 5. "Comprehensive testing" metninin görünür olduğunu doğrula
  await expect(
    page.getByText("Comprehensive testing"),
    "Comprehensive testing metni sayfada görünmüyor",
  ).toBeVisible();

  console.log("BU SATIR CALISTIRILMAZ CUNKU ONCEKİ SATİRDA TEST BASARISIZ OLDU")

});

test("soft assertion ", async ({ page }) => {

  // 1. "https://mehmet-alatas.github.io/qatest/" adresine git
  await page.goto("https://mehmet-alatas.github.io/qatest/");

  // 2. Sayfanın URL'sinin "https://mehmet-alatas.github.io/qatest/" olduğunu doğrula
  await expect.soft(page,"Sayfa Urli bekelenen degerle eslesmiyor").toHaveURL("https://mehmet-alatas.github.io/qatest/");

  // 3. Sayfanın başlığının "Yanlis Title" olduğunu doğrula
  await expect.soft(page,"Sayfa basligi beklenen degerle eslesmiyor").toHaveTitle("Yanlis Title");

  // 4. "QA Portal" bağlantısının görünür olduğunu doğrula
  await expect
    .soft(page.getByRole("link", { name: "QA Portal" }),"QA portal baglantisi sayfada görünmüyor")
    .toBeVisible();

  // 5. "Comprehensive testing" metninin görünür olduğunu doğrula
  await expect
    .soft(page.getByText("Comprehensive testing"), "Comprehensive testing metni sayfada görünmüyor")
    .toBeVisible();

  console.log(
    "BU SATIR CALISTIRILIR CUNKU ONCEKİ SATİRDA TEST BASARISIZ OLSA BILE SOFT ASSERTION KULLANILDI",
  );
  
});
