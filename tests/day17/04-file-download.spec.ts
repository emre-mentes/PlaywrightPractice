import { test, expect } from "@playwright/test";

// ╔══════════════════════════════════════════════════════════════╗
// ║           TEST CASE: Dosya İndirme (File Download)     ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ TC-001: Download butonuna tıklandığında dosya indirilmeli    ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ PRECONDITIONS:                                               ║
// ║https://testcenter.techproeducation.com/index.php?page=file-download
// ║  erişilebilir olmalı                                         ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ TEST STEPS:                                                  ║
// ║   1. Download sayfasına git                                  ║
// ║   2. İndirme event'ini dinlemeye başla                       ║
// ║   3. b10 all test cases, code.docx Dosya linkine tıkla       ║
// ║   4. İndirme tamamlanana kadar bekle                         ║
// ║   5. Dosya adını doğrula                                     ║
// ╠══════════════════════════════════════════════════════════════╣
// ║ EXPECTED RESULT:                                             ║
// ║   - İndirilen dosyanın adı "b10 all test cases, code.docx" olmalı ║
// ╚══════════════════════════════════════════════════════════════╝

test('file download testi', async ({ page }) => {
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=file-download",
  );

  const downloadPromise = page.waitForEvent("download");

  await page
    .getByRole("link", { name: "b10 all test cases, code.docx" })
    .click();

  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("b10 all test cases, code.docx");

});
