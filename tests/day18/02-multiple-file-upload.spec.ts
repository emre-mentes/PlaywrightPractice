import { test ,expect} from '@playwright/test';
// ╔══════════════════════════════════════════════════════════════╗
// ║      TEST CASE: Çoklu Dosya Yükleme (Multiple Upload)        ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ TC-001: Kullanıcı aynı anda birden fazla dosya yükleyebilmeli║
// ╠══════════════════════════════════════════════════════════════╣
// ║ PRECONDITIONS:                                               ║
// ║   - https://mehmet-alatas.github.io erişilebilir olmalı      ║
// ║   - tests/day18/upload/ klasöründe 3 dosya mevcut olmalı     ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ TEST STEPS:                                                  ║
// ║   1. Upload sayfasına git                                    ║
// ║   2. Birden fazla dosyayı input'a ver                        ║
// ║   3. Dosyaların listelendiğini doğrula                       ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ EXPECTED RESULT:                                             ║
// ║   - Tüm dosya adları sayfada görünmeli                       ║
// ╚══════════════════════════════════════════════════════════════╝
test('multiple file upload testi', async ({ page }) => {
    await page.goto(
      "https://mehmet-alatas.github.io/qatest/downloadUpload.html",
    );

    await page
      .locator("#file-input")
      .setInputFiles([
        "tests/day18/upload/FileUpload.pdf",
        "tests/day18/upload/FileUpload2.pdf",
        "tests/day18/upload/FileUpload3.pdf"]);

    await expect(page.getByText("FileUpload.pdf")).toBeVisible();
    await expect(page.getByText("FileUpload2.pdf")).toBeVisible();
    await expect(page.getByText("FileUpload3.pdf")).toBeVisible();
    
});