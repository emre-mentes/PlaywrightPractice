
import { test, expect } from "@playwright/test";

test.describe("Grup 1 Techpro Title ve Url testleri", () => {

    
  test("Test 1: Title Kontrolü", async ({ page }) => {
    await page.goto("https://techproeducation.com");
    const title = await page.title();
    expect(title).toContain("IT");
  });

  
  test("Test 2: URL Kontrolü", async ({ page }) => {
    await page.goto("https://techproeducation.com");
    const url = page.url();
    expect(url).toContain("education");
  });


});