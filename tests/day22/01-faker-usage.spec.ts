import { test, expect } from "@playwright/test";
//import { faker } from "@faker-js/faker";
import { faker } from "@faker-js/faker/locale/tr";

test("faker ile dynamic test datalari kullanimi", async ({ page }) => {
  // 1. https://testpages.eviltester.com/pages/forms/text-inputs/ sayfasına git
  await page.goto("https://testpages.eviltester.com/pages/forms/text-inputs/");

  // 2. Faker ile test verileri üret (text, search, password, email, url, tel, fullName)
  const textValue = faker.lorem.words(3);
  console.log("textValue :", textValue);

  const searchValue = faker.commerce.productName();
  console.log("searchValue :", searchValue);

  const passwordValue = faker.internet.password({ length: 12 });
  console.log("passwordValue :", passwordValue);

  const emailValue = faker.internet.email({ provider: "gmail.com" });
  console.log("emailValue :", emailValue);

  const urlValue = faker.internet.url();
  console.log("urlValue :", urlValue);

  const telValue = faker.phone.number();
  console.log("telValue:", telValue);

  const noneTextValue = faker.person.fullName();
  console.log("noneTextValue:", noneTextValue);

  // 3. Form alanlarını locator'lar ile tanımla
  const textInput = page.getByLabel("Text",{exact:true});
  const searchInput = page.getByLabel("Search");
  const passwordInput = page.getByLabel("Password");
  const emailInput = page.getByLabel("email");
  const urlInput = page.locator("#url-input");
  const telInput = page.getByLabel("tel");
  const noneTextInput = page.getByLabel("None (text)");


  // 4. Her form alanını faker ile üretilen verilerle doldur
  await textInput.fill(textValue);
  await searchInput.fill(searchValue);
  await passwordInput.fill(passwordValue);
  await emailInput.fill(emailValue);
  await urlInput.fill(urlValue);
  await telInput.fill(telValue);
  await noneTextInput.fill(noneTextValue);


  // 5. Doldurduğun her alanın doğru değeri taşıdığını doğrula
  await expect(textInput).toHaveValue(textValue);
  await expect(searchInput).toHaveValue(searchValue);
  await expect(passwordInput).toHaveValue(passwordValue);
  await expect(emailInput).toHaveValue(emailValue);
  await expect(urlInput).toHaveValue(urlValue);
  await expect(telInput).toHaveValue(telValue);
  await expect(noneTextInput).toHaveValue(noneTextValue);

//HOMEWORK
  // 6. "Validate and Send Inputs" butonuna tıkla
  await page.getByRole("button",{name:'Validate and Send Inputs'}).click()
  // 7. Sayfada gözüken gönderim sonuçlarını locator'lar ile tanımla
  // 8. Gönderilen değerlerin sayfada doğru gösterildiğini doğrula
});