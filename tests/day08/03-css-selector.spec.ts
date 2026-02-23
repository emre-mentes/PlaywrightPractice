/*
Syntax
1)  tagName [ attributeName = 'attributeValue' ]
2)  eger id ile css locate almak istersek #idAttributeValue
3)  eger class ile css locate almak istersek .classAttributeValue


X-Path ile Css Selector arasindaki farklar
1)  cssSelector X-Path e gore daha hizlidir
2)  X-Path ile bir webelementi index belirterek tek e indirgeyebiliriz
    Ama CSS selector de index kullanamayiz
3)  X-Path ile bir webelementi sadece text'i ile locate edebiliriz
    normalde Css selector ile yazidan locate edemeyiz
    playwright css selector ile yazidan locate alabilmek icin bazi extra yöntemler barindirir..
     */

import { test, expect } from "@playwright/test";

test("css selector usage", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/auth/register");

  // tag name ile
  await page.locator("input").first().fill("tagname input ile sectik");

  //#first_name id kısa yol
  await page.locator("#first_name").fill("id kısa yol");

  //class ile kısa yol
  await page.locator(".form-control").first().fill("class kısa yol");

  //tagname attribute name ve attribute value ile secim input[id='first_name']
    await page
      .locator("input[id='first_name']")
      .fill("tagname attribute name ve attribute value");



});