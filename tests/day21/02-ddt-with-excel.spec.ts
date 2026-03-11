import { test, expect } from "@playwright/test";
import * as xlsx from "xlsx";
const workbook = xlsx.readFile("test-data/loginTestData.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const testData: any[] = xlsx.utils.sheet_to_json(sheet);

for (const data of testData) {

  test(`login test ${data.username}`, async ({ page }) => {
    //   Tarayıcıda https://www.saucedemo.com/ adresine git
    await page.goto("https://www.saucedemo.com/");

    const usernameFiled = page.getByTestId("username");
    const passwordFiled = page.getByTestId("password");
    const loginButton = page.getByTestId("login-button");
    const productsTitle = page.getByTestId("title");

    //   Username alanına "standard_user" yaz
    await usernameFiled.fill(data.username);
    //   Password alanına "secret_sauce" yaz
    await passwordFiled.fill(data.password);
    //   Login butonuna tıkla
    await loginButton.click();
    //   Login isleminin basarili oldugunu dogrula
    await expect(productsTitle).toBeVisible();
  });
}