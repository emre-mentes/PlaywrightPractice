import { test, expect,Locator } from "@playwright/test";

test("getAttribute() usage", async ({ page }) => {
  // 1. https://testcenter.techproeducation.com/index.php?page=registration-form sayfasına git.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=registration-form",
  );

  // 2. firstName input alaninin Placeholder yazısının "first name" olduğunu doğrula.
  const actualPlaceHolderAttributeValue: string | null = await page
    .getByPlaceholder("first name")
    .getAttribute("placeholder");

  expect(actualPlaceHolderAttributeValue).toBe("first name");
});

test('inputValue(), pressSequentially(), clear(), press()', async ({ page }) => {
  // 1. https://testcenter.techproeducation.com/index.php?page=registration-form sayfasına git.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=registration-form"
  );

  // 2. "First name" input alanını bul.
  const input: Locator = page.getByLabel("First name");

  // 3. Input alanına "Ali" yaz (her harfi yavaşça, gerçek kullanıcı gibi).
  //input.fill("Ali");==> copy + paste
  await input.pressSequentially("Ali",{delay:1000});

  // 4. inputValue() ile input alanının o anki değerini çek.
  const actualInputValue = await input.inputValue();

  // 5. Çekilen değerin "Ali" olduğunu doğrula.
  expect(actualInputValue).toBe("Ali");

  // 6. Input alanını temizle.
  await input.clear();

  // 7. inputValue() ile input alanının temizlendiğini doğrula.
  const actualClearedValue = await input.inputValue();
  expect(actualClearedValue).toBe("");//kutunun icinde hicbir karakter kalmamis olmali
});