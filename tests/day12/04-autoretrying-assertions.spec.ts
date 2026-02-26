import { test,expect } from '@playwright/test';

test('auto-retrying assertions', async ({ page }) => {

  // 1.  https://www.letskodeit.com/practice sayfasına git.
  // 2.  Enabled/Disabled Field Input alanının aktif (enabled) olduğunu doğrula.
  // 3.  "Disable" butonuna tıkla ve input'un devre dışı olduğunu doğrula.
  // 4.  Enabled/Disabled Field Input alanının düzenlenemez(disabled) olduğunu doğrula.
  // 5.  "Enable" butonuna tıkla ve input'un düzenlenebilir olduğunu doğrula.
  // 6.  Enabled/Disabled Field Input alanının boş olduğunu doğrula.
  // 7.  Enabled/Disabled Field Input alanının'a "Test" yaz ve boş olmadığını doğrula.
  // 8.  Hide/Show input'unun görünür olduğunu doğrula.
  // 9.  "Hide" butonuna tıkla ve input'un gizlendiğini doğrula.
  // 10. Switch To Alert Example elementinin Alert içerip içermediğini doğrula.
  // 11. Sayfa başlığının "Practice Page" olduğunu doğrula.
  // 12. Input'un değerinin "Test" olduğunu doğrula.
  // 13. Tarayıcı sekmesi başlığının "Practice Page" olduğunu doğrula.
  // 14. Sayfanın URL'inin doğru olduğunu doğrula.
  
});