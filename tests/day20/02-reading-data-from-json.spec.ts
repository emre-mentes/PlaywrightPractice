import { test, expect } from "@playwright/test";

//register-test-data.json dosyamisdaki datalarin tamanini dosyamiza dahil etmis olduk, testData artik json dosyamizi temsil eden bir objectdir
import testData from "../../test-data/register-test-data.json";

test("JSON dosyasindan data okuma", async ({ page }) => {
  // 1. Registration form sayfasına git
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=registration-form",
  );

  // 2. First name alanını doldur
  await page.getByPlaceholder("first name").fill(testData.firstName);

  // 3. Last name alanını doldur
  await page.getByPlaceholder("last name").fill(testData.lastName);

  // 4. Username alanını doldur
  await page.getByPlaceholder("username").fill(testData.username);

  // 5. Email address alanını doldur
  await page.getByPlaceholder("email@email.com").fill(testData.email);

  // 6. Phone number alanını doldur
  await page.getByPlaceholder("571-000-0000").fill(testData.phoneNumber);

  // 7. Date of birth alanını doldur  MM/DD/YYYY
  await page.getByPlaceholder("MM/DD/YYYY").fill(testData.dateOfBirth);

  // 8. Password alanını doldur  
  await page.locator("input[type='password']").fill(testData.password);

  // 9. Gender radio button'ını seç
  await page.locator(`input[value='${testData.gender}']`).check();

  // 10. Department dropdown'ından seçim yap
  //Normalde value tercih etmek best practice ama biz projectimizde JSON dosyasina bakan herkes hangi departman secildigini anlasin diye label tercih ettik
  await page.locator("select[name='department']").selectOption({label:testData.department});

  // 11. Job title dropdown'ından seçim yap
  await page.locator("select[name='job_title']").selectOption({label:testData.jobTitle});

  // 12. Programming language checkbox'ını işaretle
  await page.getByLabel(testData.programmingLanguage).check();

  // 13. Submit butonuna tıkla
  await page.getByRole("button", { name: "Submit form" }).click();

});