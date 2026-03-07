import { test, expect } from "@playwright/test";

// 1. TEST SENARYOSU
test("simple alert", async ({ page }) => {
  // 1. https://testcenter.techproeducation.com/index.php?page=javascript-alerts sayfasına gidiniz.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=javascript-alerts",
  );

  //bu method playwright ta belirli bir eventin gerceklesmesini ve gerceklestigi zamanda cesitli islemler yapmamizi saglar
  page.on("dialog", async (dialog) => {
    console.log(dialog.type()); //dialog tipini verir(alert, confirm, prompt)
    console.log(dialog.message()); //I am a JS Alert

    //dialogta verilen message in I am a JS Alert oldugunu test edin
    expect(dialog.message()).toBe("I am a JS Alert");

    await dialog.accept(); //acilan pop-up tan ok a basarak kapatir
  });

  // 2. Birinci butona tıkla ve Alert'i tetikle.
  await page.getByRole("button", { name: "Click for JS Alert" }).click();

  // 3. Sonuç mesajının You successfully clicked an alert  olduğunu doğrula.
  const resultMessage = page.locator("#result");
  await expect(resultMessage).toHaveText("You successfully clicked an alert");
  //successfully icerdigini doğrula.
  await expect(resultMessage).toContainText("successfully");
});

// 2. TEST SENARYOSU
test("confirm alert", async ({ page }) => {
  // ? TEST SENARYOSU ADIMLARI
  // 1. Alert sayfasını ziyaret et.
  // 2. Alert açılma olayını dinle ve iptal (dismiss) işlemini tanımla.
  // 3. İkinci butona tıkla ve Confirm Alert'i tetikle.
  // 4. Sonuç mesajının ok icerdigini test edin.

  // 1. https://testcenter.techproeducation.com/index.php?page=javascript-alerts sayfasına gidiniz.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=javascript-alerts",
  );

  page.on("dialog", async (dialog) => {
    await dialog.accept(); //playwrihgt default olarak dissmiss yapiyordu biz etkinlige mudahale edererk ok a basmasini sagladik
  });

  // 2. İkinci butona tıkla ve Confirm Alert'i tetikle.
  await page.getByRole("button", { name: "Click for JS Confirm" }).click();

  // 3. Sonuç mesajının You clicked: Ok olduğunu doğrula.
  const resultMessage = page.locator("#result");
  await expect(resultMessage).toHaveText("You clicked: Ok");
});

// 3. TEST SENARYOSU
test("prompt alert", async ({ page }) => {
  // ? TEST SENARYOSU ADIMLARI
  // 1. Alert sayfasını ziyaret et.
  // 2. Alert açılma olayını dinle ve metin gönderme/onaylama işlemini tanımla (Tek komut ile).
  // 3. Üçüncü butona tıkla ve Prompt Alert'i tetikle.
  // 4. Sonuç mesajında gönderilen ismin ("emre") görüntülendiğini doğrula.
  // 1. https://testcenter.techproeducation.com/index.php?page=javascript-alerts sayfasına gidiniz.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=javascript-alerts",
  );

  page.on("dialog", async (dialog) => {
    dialog.accept("emre"); //metni kutuya yazar ve hemen ardından ok tusuna basarak onaylar
  });

  // 2. Üçüncü butona tıkla ve Prompt Alert'i tetikle.
  await page.getByRole("button", { name: "Click for JS Prompt" }).click();

  // 3. Sonuç mesajının You entered icerdigini doğrula.
  const resultMessage = page.locator("#result");
  await expect(resultMessage).toContainText("emre");
});