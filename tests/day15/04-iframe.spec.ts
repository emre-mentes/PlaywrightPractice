import { test, expect } from "@playwright/test";

test("iframes classwork", async ({ page }) => {
  // ? TEST SENARYOSU ADIMLARI
  // 1. https://testcenter.techproeducation.com/index.php?page=iframe sayfasını ziyaret et.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=iframe",
  );

  // 2. Ana sayfadaki 'An iframe with a thin black border:' metninin 'black border' içerdiğini doğrula.
  const mainPageText = page.getByText("An iframe with a thin black border:");
  await expect(mainPageText).toContainText("black border");

  const iframe = page.frameLocator("iframe");

  // 3. 'Applications lists' yazısının görünür olduğunu doğrula.
  await expect(iframe.getByText("Applications lists")).toBeVisible();

  // 4. Ana sayfadaki header metninin 'iframe' olduğunu doğrula.
  await expect(page.getByRole("heading", { name: "iframe" })).toHaveText(
    "iframe",
  );

  //not: Eğer main page üzerinden devam edeceksek yine herzamanki gibi page üzerinden islemlerimize devam ederiz
  //eger iframe üzerinden devam edeceksek iframei page gibi kullanip testlerimize devam edebiliriz
});
