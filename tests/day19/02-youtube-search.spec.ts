import { test, expect } from "@playwright/test";

const searchKeywords = ["playwright", "selenium", "cypress"];

//2.yol
searchKeywords.forEach((searchKeyword) => {
  test(`Parameterize test with playwright foreach ${searchKeyword}`, async ({
    page,
  }) => {
    //   1. https://www.youtube.com/ adresine git
    await page.goto("https://www.youtube.com/");

    //   2. placeholder='Search' olan input alanını bul
    const searchBox = page.getByPlaceholder("Search");

    //   3. Input alanına "playwright" yazarak arat
    await searchBox.fill(searchKeyword);
    await searchBox.press("Enter");

    //   4. Sayfa başlığının "playwright" kelimesini içerdiğini doğrula
    await expect(page).toHaveTitle(new RegExp(searchKeyword));

    //new RegExp(searchKeyword) yazarak her turda searchKeyword icinde hangi deger var ise onu arayan bir regex olusturduk, loop degiskenini regexe dönüstürmus olduk
  });
});

//1. yol
for (const searchKeyword of searchKeywords) {
  test(`Parameterize test with playwright ${searchKeyword}`, async ({
    page,
  }) => {
    //   1. https://www.youtube.com/ adresine git
    await page.goto("https://www.youtube.com/");

    //   2. placeholder='Search' olan input alanını bul
    const searchBox = page.getByPlaceholder("Search");

    //   3. Input alanına "playwright" yazarak arat
    await searchBox.fill(searchKeyword);
    await searchBox.press("Enter");

    //   4. Sayfa başlığının "playwright" kelimesini içerdiğini doğrula
    await expect(page).toHaveTitle(new RegExp(searchKeyword));

    //new RegExp(searchKeyword) yazarak her turda searchKeyword icinde hangi deger var ise onu arayan bir regex olusturduk, loop degiskenini regexe dönüstürmus olduk
  });
}