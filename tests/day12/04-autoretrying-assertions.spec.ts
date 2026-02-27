import { test, expect } from "@playwright/test";

test("auto-retrying assertions", async ({ page }) => {
  // 1.  https://www.letskodeit.com/practice sayfasına git.
  await page.goto("https://www.letskodeit.com/practice");

  // 2.  Enabled/Disabled Field Input alanının aktif (enabled) olduğunu doğrula.
  const enableDisableInput = page.getByPlaceholder("Enabled/Disabled Field");
  await expect(enableDisableInput).toBeEnabled();

  // 3.  "Disable" butonuna tıkla
  await page.getByRole("button", { name: "Disable" }).click();

  // 4.  Enabled/Disabled Field Input alanının düzenlenemez(disabled) olduğunu doğrula.
  await expect(enableDisableInput).toBeDisabled();
  await expect(enableDisableInput).not.toBeEditable(); //düzenlenemez mi?

  // 5.  "Enable" butonuna tıkla ve input'un düzenlenebilir olduğunu doğrula.
  await page.getByRole("button", { name: "Enable" }).click();
  await expect(enableDisableInput).toBeEditable(); //dezenlene bilir mi?

  // 6.  Enabled/Disabled Field Input alanının boş olduğunu doğrula.
  await expect(enableDisableInput).toBeEmpty();

  // 7.  Enabled/Disabled Field Input alanının'a "Test" yaz ve boş olmadığını doğrula.
  await enableDisableInput.fill("Test"); //artik input alaninda Test yaziyor
  await expect(enableDisableInput).not.toBeEmpty(); //dolu mu

  // 8.  Hide/Show input'unun görünür olduğunu doğrula.
  const hideShowInput = page.getByPlaceholder("Hide/Show Example");
  await expect(hideShowInput).toBeVisible();

  // 9.  "Hide" butonuna tıkla ve input'un gizlendiğini doğrula.
  await page.getByRole("button", { name: "Hide" }).click();
  await expect(hideShowInput).toBeHidden(); //toBeVisible() in tam tersi

  // 10. Switch To Alert Example elementinin Alert içerip içermediğini doğrula.
  const switchTitle = page.getByText("Switch To Alert Example");
  await expect(switchTitle).toContainText("Alert"); //Alert icerdigini kontrol ediyoruz,Tam eşleşme gerekmez.
  await expect(switchTitle).not.toContainText("Test"); //Test icermedigini kontrol ediyoruz

  // 11. Sayfa başlığının "Practice Page" olduğunu doğrula.
  const pageTitle = page.getByRole("heading", { name: "Practice Page" });
  await expect(pageTitle).toHaveText("Practice Page"); //Practice Page oldugunu kontrol ettik,Tam eşleşme gerekir
  await expect(pageTitle).not.toHaveText("Test"); //Test olmadigini kontrol ettik

  // 12. enableDisableInput metin kutusunda yazili olan değerinin "Test" olduğunu doğrula.
  await expect(enableDisableInput).toHaveValue("Test"); //test yazisi bulunuyor olmali
  await expect(enableDisableInput).not.toHaveValue("playwright"); //playwright yazmamali

  // 13. Tarayıcı sekmesi başlığının "Practice Page" olduğunu doğrula.
  await expect(page).toHaveTitle("Practice Page");
  await expect(page).not.toHaveTitle("TEST"); //TEST olmamali

  // 14. Sayfanın URL'inin doğru olduğunu doğrula.
  await expect(page).toHaveURL("https://www.letskodeit.com/practice");

  await expect(page).not.toHaveURL("https://www.letskodeit.com"); //Ana sayfada olmamaliyiz
});