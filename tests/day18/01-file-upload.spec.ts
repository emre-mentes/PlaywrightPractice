import { test, expect } from "@playwright/test";

// ╔══════════════════════════════════════════════════════════════╗
// ║           TEST CASE: Dosya Yükleme (File Upload)             ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ TC-001: Kullanıcı dosya yüklediğinde başarılı olmalı         ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ PRECONDITIONS:                                               ║
// ║   - https://the-internet.herokuapp.com erişilebilir olmalı   ║
// ║   - tests/day18/upload/FileUpload.pdf projede mevcut olmalı  ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ TEST STEPS:                                                  ║
// ║   1. Upload sayfasına git                                    ║
// ║   2. Dosyayı input'a ver                                     ║
// ║   3. Upload butonuna tıkla                                   ║
// ║   4. Başarı mesajını doğrula                                 ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ EXPECTED RESULT: ║
// ║   - "File Uploaded!" yazısı görünmeli ║
// ╚══════════════════════════════════════════════════════════════╝

test("file upload test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");


});

test('file upload testi 2', async ({ page }) => {
  await page.goto("https://www.ilovepdf.com/compress_pdf");

  /*
  setInputFiles() methodu sadece <input type="file"> webelementlerinde calisir,
  eger dosya yukleme icin web design olarak farkli taglar verildiyse bu method ise yaramayacaktir (Node is not an HTMLInputElement) hatasi verir
  Bu hatayi asmak icin gizli bulunan  input[type='file'] locatini kullanarak doğrudan bu
  weblementi locate etmeliyiz, bir dosya yukleme sayfasinda mutlaka gizlide olsu bu webelement bulunur, gizli olmasi playwright acisindan sorun olmaz, bu sayede file upload
  testimizi rahatlikla yapabilirz
  */

  await page
    .locator("input[type='file']")
    .setInputFiles("tests/day18/upload/FileUpload.pdf");

    await expect(page.getByText("FileUpload.pdf")).toBeVisible();


    
});


