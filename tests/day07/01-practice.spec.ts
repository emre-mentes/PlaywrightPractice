import { test,expect } from '@playwright/test';

test('Built-in locators practice', async ({ page }) => {
  //   1.  SauceDemo ana giriş sayfasını ziyaret et.https://www.saucedemo.com/
  await page.goto("https://www.saucedemo.com/");

  //   2.  Kullanıcı adı alanına "standard_user" bilgisini gir.
  await page.getByPlaceholder("Username").fill("standard_user");

  //   3.  Şifre alanına "secret_sauce" bilgisini gir.
  await page.getByPlaceholder("Password").fill("secret_sauce");

  //   4.  "Login" butonuna tıklayarak sisteme giriş yap.
  await page.getByRole("button", { name: "Login" }).click();

  //   5.  Girişin başarılı olduğunu "Products" başlığını görerek doğrula.
  await expect(page.getByText("Products")).toBeVisible();

  //   6.  "Sauce Labs Backpack" görseline tıklayarak ürün detayına git.
  await page.getByAltText("Sauce Labs Backpack").click();

  //   7.  Ürün detay sayfasında "Back to products" butonunun varlığını doğrula.
  await expect(
    page.getByRole("button", { name: "Back to products" }),
  ).toBeVisible();

  //   8.  "Add to cart" butonuna tıklayarak ürünü sepete ekle.
  await page.getByRole("button", { name: "Add to cart" }).click();

  //   9.  Buton metninin "Remove" olarak değiştiğini kontrol et.
  await expect(page.getByRole("button", { name: "Remove" })).toBeVisible();

  //   10. Sepet ikonundaki sayaçta "1" rakamının göründüğünü doğrula.
  await expect(page.getByText("1", { exact: true })).toBeVisible();

  //   11. Sepet ikonuna (shopping_cart_badge) tıklayarak sepet sayfasına git.
  //playwright getByTestId() yöntemi ile locate alirken default olarak data-testid attribute arar
  //config.ts dosyamizdan istedigimiz attribute u ayarlayabiliriz
  await page.getByTestId("shopping-cart-link").click();

  //   12. Sayfa başlığının "Your Cart" olduğunu doğrula.
 await expect( page.getByText("Your Cart")).toBeVisible();
 
  //   13. "Continue Shopping" butonuna tıkla.
 await page.getByRole("button", { name: "Continue Shopping" }).click();

  //   14. Tekrar ana ürün listesi (Products) sayfasına dönüldüğünü teyit et
  await expect( page.getByText("Products")).toBeVisible();
 
  //   15. Url in https://www.saucedemo.com/inventory.html oldugunu doğrula
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

});