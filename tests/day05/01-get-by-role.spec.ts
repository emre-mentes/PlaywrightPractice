import { test, expect, Locator } from "@playwright/test";

/*
Syntax = getByRole(role,{options})
Not=>
 getByRole kullanabilmek icin bir weblementin implicit(<button>,<h1>) yada explicit(<div role="button">) bir rolu olmalidir
*/

test("Baslik görünürlük Testi", async ({ page }) => {
  // https://testcenter.techproeducation.com/ sayfasina gidiniz
  await page.goto("https://testcenter.techproeducation.com/");

  // Applications lists yazisini getByRole ile locate ediniz
  const applicationListText: Locator = page.getByRole("heading", {
    name: "Applications lists",
  });

  // Görünür olduğunu doğrulayınız
  await expect(applicationListText).toBeVisible();
  
});