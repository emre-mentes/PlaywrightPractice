import { test as setup, expect } from "@playwright/test";

import path from "path";

//__dirname node js in her dosyaya otomatik olarak enjekte ettigi ve bize hangi klasör dizininde oldugumuzu dynamic olarak veren bir variable dir
const authFile = path.join(__dirname, "../playwright/.auth/user.json");

//bu satir user.json dosyasinin tam olarak ve dynamic olarak bulur ve autFile isimli bir varible assigin eder, bu varible storageState methodunda kullaniyoruz

setup("Login kullanici oturumunu kaydet", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const usernameFiled = page.getByTestId("username");
  const passwordFiled = page.getByTestId("password");
  const loginButton = page.getByTestId("login-button");
  const productsTitle = page.getByTestId("title");

  await usernameFiled.fill("standard_user");
  await passwordFiled.fill("secret_sauce");
  await loginButton.click();
  //bu url i görene kadar bekle, gördükten sonra devam et diyoruz, cünkü storage state icin  oturumu kayıt ederken eksik kayıt edilmesin istiyoruz
  await page.waitForURL("https://www.saucedemo.com/inventory.html");

  await expect(productsTitle).toBeVisible();

  await page.context().storageState({ path: authFile });
});