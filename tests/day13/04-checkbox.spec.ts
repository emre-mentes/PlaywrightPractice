import { test, expect } from "@playwright/test";

test("checkboxes", async ({ page }) => {
  // Test Case: Checkbox 1 isaretlenmeli ve Checkbox 2 isareti kaldirilmali
  // 1. "https://the-internet.herokuapp.com/checkboxes" adresine git
  await page.goto("https://the-internet.herokuapp.com/checkboxes");

  // 2. Sayfadaki ilk onay kutucuğunu (Checkbox 1) bul
  const checkBox1 = page.getByRole("checkbox").nth(0);

  // 3. Sayfadaki ikinci onay kutucuğunu (Checkbox 2) bul
  const checkBox2 = page.getByRole("checkbox").nth(1);

  // 4. Başlangıçta Checkbox 2'nin işaretli olduğunu doğrula
  await expect(checkBox2).toBeChecked();//isaretli ise test gecer

  // 5. Başlangıçta Checkbox 1'in işaretsiz olduğunu doğrula
  await expect(checkBox1).not.toBeChecked();//isaretli degilse test gecer

  // 6. Checkbox 1'i işaretle
  await checkBox1.check();//bu method checkbox zaten isaretli ise tekrar tıklamaz isareti kaldirmaz, yalnizca isaretsiz ise isaretler

  // 7. Checkbox 2'nin işaretini kaldır
  await checkBox2.uncheck();//bu method checkbox isaretli ise isareti kaldirir
  
  // 8. Son durumda Checkbox 1'in işaretli olduğunu doğrula
  await expect(checkBox1).toBeChecked();

  // 9. Son durumda Checkbox 2'nin işaretsiz olduğunu doğrula
  await expect(checkBox2).not.toBeChecked();

});