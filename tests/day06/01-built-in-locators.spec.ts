import { test, expect, Locator } from "@playwright/test";

//getByText()
test("getByText() usage", async ({ page }) => {
  //https://testcenter.techproeducation.com/ sayfasina gidiniz
  await page.goto("https://testcenter.techproeducation.com/");

  //Applications lists yazisinin görünür oldugunu test ediniz
  const applicationsListsText: Locator = page.getByText("Applications lists", {
    exact: true,
  });
  await expect(applicationsListsText).toBeVisible();
});

test("getByTitle() usage", async ({ page }) => {
  // https://www.techproeducation.com/ sayfasina gidiniz
  await page.goto("https://www.techproeducation.com/");

  // Go to Turkish linkine tıklayiniz
  await page.getByTitle("Go to Turkish").click();

  // Sayfa basliginin TechPro Education IT Kursları oldugunu test ediniz
  await expect(page).toHaveTitle("TechPro Education IT Kursları");

  // Sayfa urlinin https://www.techproeducation.com.tr/ oldugunu test ediniz
  await expect(page).toHaveURL("https://www.techproeducation.com.tr/");
});

test('getByLabel() usage', async ({ page }) => {
  //https://testcenter.techproeducation.com/index.php?page=registration-form sayfasina gidiniz
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=registration-form",
  );

  //firstname ve lastname inputlarinin kullanici etkilesimine acik oldugunu test ediniz


  const firstNameInput = page.getByLabel("First name");
  await firstNameInput.fill("Emre");
  await expect(firstNameInput).toBeEnabled();
  await expect(firstNameInput).toHaveValue("Emre");


  await page.getByLabel("Last name").fill("MENTES");
  await expect(page.getByLabel("Last name")).toBeEnabled();
  await expect(page.getByLabel("Last name")).toHaveValue("MENTES");

});