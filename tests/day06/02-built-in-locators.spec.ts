import { expect, test } from "@playwright/test";

test("getByTestId() usage", async ({ page }) => {
  //https://www.facebook.com/ sayfasina gidiniz
  await page.goto("https://www.facebook.com/");

  await page.getByText("Allow all cookies").nth(1).click();


  //email icin 123 giriniz
  await page.getByTestId("royal-email").fill("123");

  //password icin 123 giriniz
  await page.getByTestId("royal-pass").fill("123");

  //login butonuna basınız
  await page.getByTestId("royal-login-button").click();

  //Login isleminin basarili bir sekilde gerceklesmedigini test ediniz
  await expect(
    page.getByRole('link', { name: "Forgotten password?" }),
  ).toBeVisible();
});

test("getByPlaceHolder() usage", async ({ page }) => {
  //https://testcenter.techproeducation.com/index.php?page=registration-form sayfasina gidiniz
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=registration-form",
  );

  //firstname ve lastname inputlarinin kullanici etkilesimine acik oldugunu test ediniz
  await expect(page.getByPlaceholder("first name")).toBeEnabled();
  await expect(page.getByPlaceholder("last name")).toBeEnabled();
});

test("getByAltText() usage", async ({ page }) => {
  // https://techproeducation.com/ sayfasina gidiniz
  await page.goto("https://techproeducation.com/");

  // Selenium Automation Tester görselinin görünür oldugunu test ediniz
  await expect(page.getByAltText("Selenium Automation Tester")).toBeVisible();
});