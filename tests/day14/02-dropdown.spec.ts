import { expect, test } from "@playwright/test";
/*
   Eger dropdown webelementi <select> tagi kullanilarak olusturulmus ise asagidaki yöntemi kullanabilirsiniz

    Playwright ile bir dropdown menuden secim yapabilmek icin öncelikle bu weblementi locate etmek ve ardindan selectOption() methodu ile secim yapmak gerekir

    selectOption() methodu kullanirken 3 alternatifimiz var
    1) Value => syntax
    await dropDown.selectOption({value:"value attribute degeri"})
     =>En güvenilir ve tavsiye edilen yöntem budur

    2) Label => syntax
    await dropDown.selectOption({label:"kullanicinin ekranda gördüğü metin"})

    3) Index => syntax
    await dropDown.selectOption({index:0}); 
    => index 0 dan baslar, yani en bastaki secenek icin 0 yazmaliyiz

*/
test("Dropdown classwork", async ({ page }) => {
  // 1. https://testcenter.techproeducation.com/index.php?page=dropdown sayfasını ziyaret et.
  await page.goto(
    "https://testcenter.techproeducation.com/index.php?page=dropdown",
  );

  // 2. Yıl, ay, gün Dropdown elementlerini locate et.
  const yearDropdown = page.locator("#year");
  const monthDropdown = page.locator("#month");
  const dayDropdown = page.locator("#day");

  // 3. Yıl, ay ve gün elementlerini sırasıyla index, value ve label ile seç.
  await yearDropdown.selectOption({ index: 1 }); //index 0 dan basladigi icin 1 yazdigimizda bastan ikinciyi yani 2025 i sectik

  //<option value="3">April</option>
  //secmek istedigmiiz option webelementinin value attribute degerini giriyoruz, 3 yazdigimiz icin April i secmis olduk
  await monthDropdown.selectOption({ value: "3" });

  await dayDropdown.selectOption({ label: "19" }); //ekranda görülen degere göre secim yaptim

  // 4. Yıl, ay ve gün elementlerini sırasıyla '2020', '11', '9' görünür metin ile seç.
  //eger süslü parantez {} kullanmadan string olarak belirtirsek playwright bu durumda öncelikle value olarak arar, eslesen value bulamaz ise Label olarak arar
  await yearDropdown.selectOption("2020");
  await monthDropdown.selectOption("11"); //december secer
  await dayDropdown.selectOption("9");

  // 5. Seçimlerin, beklenen value değerlerini taşıdığını doğrula.
  await expect(yearDropdown).toHaveValue("2020"); //yearDropdownunun suan secili olan optionun value attriubute degeri 2020 olmali diye kontrol eder

  await expect(monthDropdown).toHaveValue("11"); //monthDropdown da secili option value su 11 mi
  await expect(dayDropdown).toHaveValue("9"); //dayDropdown da secili option value su 9 mu
});
