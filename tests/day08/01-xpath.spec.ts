/*
    /  -> Bir alt childi secer
    // -> Sayfadaki herhangi bir webelementi secer  //div
    @  -> Bir webelementin attributunu secmek icin kullanilir
    [] -> Index veya kosul belirtmek icin kullanilir
    * -> Herhangi bir webelementi secer (farketmeksizin)

SYNTAX:
    //tagName [ @ attribute ismi = 'attribute degeri' ]
    //*[@*='attribute degeri']
   (//tagName [ @ attribute ismi = 'attribute degeri' ]) [ index]
*/

import { test, expect } from "@playwright/test";
test("x path locator usage", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/auth/register");

  //tagname ile
  await expect(page.locator("//h3")).toHaveText("Customer registration");


  //tagname +  attribute name  + attribute value ile
  await page
    .locator("//input[@id='first_name']")
    .fill("tagname +  attribute name  + attribute value ile");


  //tag name farketmeksizin
  await page.locator("//*[@id='first_name']").fill("tag name farketmeksizin");


  //Multiple Attribute Usage (And)
  await page
    .locator("//*[@id='first_name' and @placeholder='First name *']")
    .fill("Multiple Attribute Usage (And)");


  //full text
  await expect(
    page.locator("//*[text()='Customer registration']"),
  ).toBeVisible();


  //text() fonksiyonunun kısa yolu .
  await expect(page.locator("//*[.='Customer registration']")).toBeVisible();


  //contains text //*[  contains( text()   ,  'usto'  )     ]
  await expect(page.locator("//*[contains( text() ,'usto') ]")).toContainText("regis");





});