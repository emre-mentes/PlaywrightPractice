import { test, expect } from "@playwright/test";

test("Radio Button Classwork", async ({ page }) => {
  // Test Case:
  // 1. "https://testcenter.techproeducation.com/index.php?page=radio-buttons" adresine git
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=radio-buttons",
  );

  /*
        <div class="radio">
            <input type="radio" id="blue" name="color" checked="">
            <label class="form-check-label">Blue</label>
        </div>
        burada label da for attribute yoktur, yani label ile input arasinda herhangi bir baglanti kurulamamistir
        dolayisiyla playwright "Blue" adli radio butonunu getByRole ile bulamaz ve hata verir
        bu nedenle css tercih ettik
        */
  // 2. Blue, Red, Green, Basketball radyo butonlarını tanımla
  const blueRadio = page.locator("#blue");
  const redRadio = page.locator("#red");
  const greenRadio = page.locator("#green");
  const basketBallRadio = page.getByRole("radio", { name: "Basketball" });


  // 3. Başlangıçta "Blue" renginin işaretli olduğunu doğrula
  await expect(blueRadio).toBeChecked();

  // 4. "Red" radyo butonunu işaretle
  await redRadio.check();

  // 5. "Red"in işaretli, "Blue"nun işaretsiz olduğunu doğrula
  await expect(redRadio).toBeChecked();
  await expect(blueRadio).not.toBeChecked();
  
  // 6. "Basketball" sporunu işaretle ve işaretli olduğunu doğrula
  await basketBallRadio.check();
  await expect(basketBallRadio).toBeChecked();

  // 7. "Green" butonunun devre dışı olduğunu doğrula
  await expect(greenRadio).toBeDisabled();

});