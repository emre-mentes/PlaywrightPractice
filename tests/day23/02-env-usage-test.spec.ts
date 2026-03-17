import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();


test("login testi", async ({ page }) => {
  //  Tarayıcıda https://www.saucedemo.com/ adresine git
  await page.goto(process.env.BASE_URL || "https://www.saucedemo.com/");
  // || => soldaki deger herhangi bir falsy(null,undefined,"",0,false) deger ise sagdaki degeri kullan demek

  const usernameFiled = page.getByTestId("username");
  const passwordFiled = page.getByTestId("password");
  const loginButton = page.getByTestId("login-button");
  const productsTitle = page.getByTestId("title");

  //! => typescripte güven bana bu data kesinlikle gelecek demis olduk, eger data gelmezse hata fırlatir

  //  Username alanına "standard_user" yaz
  await usernameFiled.fill(process.env.SAUCEDEMO_USERNAME_VALID!);

  //?? => nullish coalescing operator()  ?? solundaki deger undefined yada null ise sagdaki degeri kullan demek, sadece null ve undefined ise devreye girer
  //  Password alanına "secret_sauce" yaz
  await passwordFiled.fill(
    process.env.SAUCEDEMO_PASSWORD_VALID ?? "secret_sauce",
  );
  //  Login butonuna tıkla
  await loginButton.click();
  //  Login isleminin basarili oldugunu dogrula
  await expect(productsTitle).toBeVisible();
});

test("dotenv base url kullanimi", async ({ page }) => {
  /*use: {
    baseURL: process.env.BASE_URL || "https://www.saucedemo.com/",
    }
    config ts dosyamizdaki use icinde baseurli bu sekilde tanimladigimiz zaman bir baseurl değisikligi oldugunda güncellemek cok daha kolay olur, tüm testler buradaki base urli baz alir. await page.goto("/"); diyerek kullanmamiz yeterli olur
    diger yöntemle hard code olur, bir değisiklik oldugunda herbirisini tek tek güncellemek gerekir

*/

  await page.goto("/");

  // await page.goto("https://www.saucedemo.test.com/");
});