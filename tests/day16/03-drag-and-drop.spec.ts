import { test, expect } from "@playwright/test";

test("drag and drop", async ({ page }) => {
  // 1. https://testcenter.techproeducation.com/index.php?page=droppable sayfasına git
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=droppable",
  );

  // 2. "Drag me to my target" yazan elementi bul
  const drag = page.getByText("Drag me to my target");

  // 3. "Drop here" yazan elementi bul
  const drop = page.getByText("Drop here");

  // 4. "Drag me to my target" elementini "Drop here" elementinin üzerine sürükle ve bırak
  //dragTo() methodu bir weblementi baska bir weblementin üzerine götürür ve birakir
  await drag.dragTo(drop);

  // 5. "Dropped!" yazısının görünür olduğunu doğrula
  await expect(page.getByText("Dropped!")).toBeVisible();
});

test("drag and drop practice", async ({ page }) => {
  // 1. Go to https://jqueryui.com/droppable/
  await page.goto("https://jqueryui.com/droppable/");

  // 2. Switch to the iframe containing the elements.
  const iframe =page.frameLocator(".demo-frame");

  // 3. Drag 'Drag me to my target' webelement onto the 'Drop here' webelement.
  const dragElement = iframe.getByText("Drag me to my target");
  const dropElement = iframe.locator("#droppable");
  await dragElement.dragTo(dropElement);

  // 4. (Optional) Verify that the drop operation was successful.
  await expect(dropElement).toHaveText("Dropped!");

  //ikinci yol
  await expect(iframe.getByText("Dropped!")).toHaveText("Dropped!", {
    timeout: 15000,
  });
});
