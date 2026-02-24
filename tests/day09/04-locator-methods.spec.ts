import { test, expect } from "@playwright/test";

test("allTextContents() usage", async ({ page }) => {
  // 1. https://testcenter.techproeducation.com sitesine git
  await page.goto("https://testcenter.techproeducation.com");

  // 2. Sayfadaki tüm linklerin metinlerini toplu olarak al
  const allLinkText: string[] = await page.getByRole("link").allTextContents();

  for (const linkText of allLinkText) {
    // 3. Her link metnindeki gereksiz boşlukları temizle
    const temizlenmisMetin = linkText.trim();

    // 4. Her link metninin en az 3 karakterden oluştuğunu doğrula
    expect(temizlenmisMetin.length).toBeGreaterThan(2);

    // 5. Hiçbir link metninde "undefined" veya "null" yazmadığını doğrula
    expect(temizlenmisMetin.toLowerCase()).not.toContain("null");
    expect(temizlenmisMetin.toLowerCase()).not.toContain("undefined");


  }
});