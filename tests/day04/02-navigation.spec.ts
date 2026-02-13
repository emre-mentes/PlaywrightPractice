import { test } from "@playwright/test";

test("Navigation Methods", async ({ page }) => {
  
    //   https://www.techproeducation.com/ adresine gidiniz
  await page.goto("https://www.techproeducation.com/");

  //   https://www.amazon.com/ adresine gidiniz
  await page.goto("https://www.amazon.com/");

  //   Tarayıcıda bir önceki sayfaya (Techpro) geri dönünüz
  await page.goBack();

  //   Tekrar ileri sayfaya (Amazon) gidiniz
  await page.goForward();

  //   Mevcut sayfayı (Amazon) yenileyiniz (F5 yapınız)
  await page.reload();

  //   sayfayi kapatiniz
  await page.close();
  
});