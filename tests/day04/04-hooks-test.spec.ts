import { test, expect } from "@playwright/test";

test.beforeEach(async({page})=>{
await page.goto("https://techproeducation.com");
});

test("Test 1: Title Kontrolü", async ({ page }) => {
  const title = await page.title();
  expect(title).toContain("IT");
});

test("Test 2: URL Kontrolü", async ({ page }) => {  
  const url = page.url();
  expect(url).toContain("education");
});