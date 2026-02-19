import { test, expect, Locator } from "@playwright/test";

test("get by role ", async ({ page }) => {
  // Belirtilen web sayfasını açın.(https://mehmet-alatas.github.io/qatest/)
  await page.goto("https://mehmet-alatas.github.io/qatest/");

  // Get Started linkine tiklayiniz
  await page.getByRole("link", { name: "Get Started" }).click();

  //  playwright locators sayfasina gidiniz
  await page.getByRole("link", { name: "Start Practice" }).nth(1).click();

  //  Sayfanın doğru URL'sine gidildiğini kontrol ediyoruz(https://mehmet-alatas.github.io/qatest/playwrightlocators.html)
  await expect(page).toHaveURL(
    "https://mehmet-alatas.github.io/qatest/playwrightlocators.html",
  );

  // Sayfadaki arama kutusunu (searchbox) bulun.
  const searchBox: Locator = page.getByRole("searchbox");

  // Arama kutusunun görünür olduğunu doğrulayın.
  await expect(searchBox).toBeVisible();

  // Arama kutusuna "Playwright" metnini yazın.
  await searchBox.fill("Playwright");

  // "Go to footer" isimli bağlantıyı (link) bulun.
  const goToFooterLink :Locator = page.getByRole("link",{name:"Go to footer"});

  // Go to footer Bağlantısının görünür olduğunu doğrulayın.
  await expect(goToFooterLink).toBeVisible();

  // Go to footer Bağlantısının tıklanabilir (etkin) olduğunu doğrulayın.
  await expect(goToFooterLink).toBeEnabled();
  

});