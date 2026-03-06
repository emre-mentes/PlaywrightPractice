import { expect, test } from "@playwright/test";

test("dropdown classwork", async ({ page }) => {
  // ADIM 1 → https://testcenter.techproeducation.com/index.php?page=dropdown sayfasına git.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=dropdown",
  );

  // ADIM 2 → Eyalet dropdown elementini (#state) locate et.
  const stateDropdown = page.locator("#state");

  //görünür metne göre Arizonayi sectik
  //1.yol
  await stateDropdown.selectOption({ label: "Arizona" });
  //2.yol
  await stateDropdown.selectOption("Arizona");

  //index ile en bastaki seceneği sectik
  await stateDropdown.selectOption({ index: 0 });

  //value ile ALABAMA yi seciyoruz
  //<option value="AL">Alabama</option>
  await stateDropdown.selectOption({ value: "AL" });


  // ADIM 3 → Dropdown içindeki tüm <option> elementlerini locate et.
  const options = stateDropdown.locator("option");//state dropdown webelementi icindeki option webelementlerinin tamamini sectik

  // ADIM 4 → Tüm eyalet isimlerini allTextContents() ile oku ve konsola yazdır.
  const optionsText : string[]= await options.allTextContents();
  console.log("Eyaletler",optionsText);

  // ADIM 5 → count() ile kaç option olduğunu sayısal olarak öğren ve konsola yazdır.
  const count : number = await options.count();//kac tane var?
  console.log("Toplam Option sayisi",count);

  // ADIM 6 → toHaveCount(52) ile dropdown'da tam olarak 52 seçenek olduğunu doğrula.
  await expect(options).toHaveCount(52);

  // ADIM 7 → Dropdown içinde "California" metninin geçtiğini doğrula.
  await expect(stateDropdown).toContainText("California");
});