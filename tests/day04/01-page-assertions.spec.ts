import { test, expect } from "@playwright/test";

test("Test 1: Baslik IT iceriyor mu", async ({ page }) => {
  // ---------------------------------------------------------
  // https://techproeducation.com
  // TEST SENARYOSU 1:
  // 1. Hedef URL'e gidiniz.
  await page.goto("https://techproeducation.com");

  // 2. Sayfa başlığını (Title) bir değişkene atayınız.
  const actualTechproTitle = await page.title();

  // 3. Başlığın "IT" kelimesini içerdiğini doğrulayınız.
  expect(actualTechproTitle).toContain("IT");
});

test("Test 2: Basligin TechPro Education IT Programs oldugunu dogrula", async ({
  page,
}) => {

  // TEST SENARYOSU 2:
  // 1. Hedef URL'e gidiniz.
  await page.goto("https://techproeducation.com");

  // 2. Sayfa başlığının tam olarak "TechPro Education IT Programs" olduğunu doğrulayınız.
  await expect(page).toHaveTitle("TechPro Education IT Programs");
});

test("Test 3: URL education iceriyor mu", async ({ page }) => {
    
  // TEST SENARYOSU 3:
  // 1. Hedef URL'e gidiniz.
  await page.goto("https://techproeducation.com");

  // 2. Mevcut sayfa URL'ini bir değişkene atayınız.
  const actualTechproUrl = page.url();

  // 3. URL'in "education" kelimesini içerdiğini doğrulayınız.
  expect(actualTechproUrl).toContain("education");
});

test("Test 4: Sayfa URL'inin tam olarak https://www.techproeducation.com/ olduğunu doğrula", async ({
  page,
}) => {
  // TEST SENARYOSU 4:
  // 1. Hedef URL'e gidiniz.
  await page.goto("https://techproeducation.com");

  // 2. Sayfa URL'inin tam olarak "https://www.techproeducation.com/" olduğunu doğrulayınız.
  await expect(page).toHaveURL("https://www.techproeducation.com/");
  
});