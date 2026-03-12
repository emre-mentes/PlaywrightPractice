import { test, expect } from "@playwright/test";
//import { faker } from "@faker-js/faker";
import { faker } from "@faker-js/faker/locale/tr";
import {getTextInputsFormData} from "../../utils/testDataHelper";

test("faker ile dynamic test datalari kullanimi", async ({ page }) => {
  // 1. https://testpages.eviltester.com/pages/forms/text-inputs/ sayfasına git
  await page.goto("https://testpages.eviltester.com/pages/forms/text-inputs/");

  // 2. Faker ile test verileri üret (text, search, password, email, url, tel, fullName)
  const formData =getTextInputsFormData();



  // 3. Form alanlarını locator'lar ile tanımla
  const textInput = page.getByLabel("Text", { exact: true });
  const searchInput = page.getByLabel("Search");
  const passwordInput = page.getByLabel("Password");
  const emailInput = page.getByLabel("email");
  const urlInput = page.locator("#url-input");
  const telInput = page.getByLabel("tel");
  const noneTextInput = page.getByLabel("None (text)");

  // 4. Her form alanını faker ile üretilen verilerle doldur
  await textInput.fill(formData.text);
  await searchInput.fill(formData.search);
  await passwordInput.fill(formData.password);
  await emailInput.fill(formData.email);
  await urlInput.fill(formData.url);
  await telInput.fill(formData.tel);
  await noneTextInput.fill(formData.none);

  // 5. Doldurduğun her alanın doğru değeri taşıdığını doğrula
  await expect(textInput).toHaveValue(formData.text);
  await expect(searchInput).toHaveValue(formData.search);
  await expect(passwordInput).toHaveValue(formData.password);
  await expect(emailInput).toHaveValue(formData.email);
  await expect(urlInput).toHaveValue(formData.url);
  await expect(telInput).toHaveValue(formData.tel);
  await expect(noneTextInput).toHaveValue(formData.none);

});