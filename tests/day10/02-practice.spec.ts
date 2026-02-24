import { test, expect, Locator } from "@playwright/test";

test("practice", async ({ page }) => {

  // 1. https://www.amazon.com sayfasına git.
  await page.goto("https://www.amazon.com");

  // 2. Arama kutusunu bul ve bir değişkene ata.
  const searchBox: Locator = page.getByPlaceholder("Search Amazon");
  /*
  <input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false" data-agent-button-proxy="nav-search-submit-button-agent" data-agent-field="search-query" form="nav-search-bar-form" data-agent-patched="true">
  */
  // 3. Arama kutusunun "name" attribute değerinin "field-keywords" olduğunu doğrula.

  //birinci yol
  const nameAttributeValue = await searchBox.getAttribute("name");
  expect(nameAttributeValue).toBe("field-keywords");

  //ikinci yol method chain ile
  //expect(await searchBox.getAttribute("name")).toBe("field-keywords");

  // 4. Arama kutusuna "mouse" yaz.
  await searchBox.fill("mouse");

  // 5. Arama kutusunun o anki değerinin "mouse" olduğunu doğrula.
  const actualSearchBoxValue = await searchBox.inputValue();
  expect(actualSearchBoxValue).toBe("mouse");

  // 6. Aramayı başlat.

    //birinci yol
  // await page.getByRole("button", { name: "Go", exact: true }).click();

  //ikinci ve pratik yolu
  await searchBox.press("Enter");//searchbox üzerinde enter tusuna basma islemini simule eder

  // 7. Sayfa başlığının "mouse" içerdiğini doğrula.
  await expect(page).toHaveTitle(/mouse/i);//buyuk harf kücük harf duyarsiz olarak mouse iceriyormu diye kontrol ettik

});