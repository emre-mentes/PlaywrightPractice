import { test, expect } from "@playwright/test";

test("multi window handling classwork", async ({ page, context }) => {
  // TEST SENARYOSU:
  // 1. https://the-internet.herokuapp.com/windows sayfasına git
  await page.goto("https://the-internet.herokuapp.com/windows");

  //Once dinlemeye basla, ==> sonra eventi tetikle(pagei acan linke tikla) =>sonrada yeni acilan sekmeyi al
  const newPagePromise = context.waitForEvent("page");

  // 2. "Click Here" linkine tıkla → kontrolümüz dışında yeni sekme açılacak
  await page.getByRole("link", { name: "Click Here" }).click();

  // 3. Playwright'ı yeni sekmeye geçir
  const newPage = await newPagePromise;

  // 4. Yeni sekmede "New Window" başlığının görünür olduğunu doğrula
  await expect(newPage.getByRole("heading", { name: "New Window" })).toBeVisible();

});