import { test, expect } from "@playwright/test";

test("visual test", async ({ page }) => {
  await page.goto(
    "https://mehmet-alatas.github.io/qatest/actionsClickDrag.html",
  );

  //görsel test te hata almak icin yazdik
  await page.getByRole("button", { name: "And Me" }).click();

  //toHaveScreenshot methodu daha önce alinmis ekran görüntüsü ile yeni alinan ekran görüntüsünü karsilastirir, ilk calistirmada ekran görüntusu olmadigi icin hata vermesi normal
  await expect(page).toHaveScreenshot("homepage.png", { maxDiffPixels: 300 });

  //maxDiffPixels:300 toplamda 300 pixele kadar tolere et hata verme demis olduk
});

test("visual test 2", async ({ page }) => {
  await page.goto(
    "https://mehmet-alatas.github.io/qatest/actionsClickDrag.html",
  );

  //görsel test te hata almak icin yazdik
  await page.getByRole("button", { name: "And Me" }).click();

  //toHaveScreenshot methodu daha önce alinmis ekran görüntüsü ile yeni alinan ekran görüntüsünü karsilastirir, ilk calistirmada ekran görüntusu olmadigi icin hata vermesi normal
  await expect(page).toHaveScreenshot("homepage.png", {
    maxDiffPixelRatio: 0.01,
  });

  //maxDiffPixelRatio:0.01 farkli olan piksel sayisi toplam piksel sayisinin %1 ini gecemez
  //bu testlerimizin farkli ekran cözünürlüklerinde daha güvenilir olmasini saglar
});