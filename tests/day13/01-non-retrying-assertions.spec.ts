import { test, expect } from "@playwright/test";


test("non-retrying assertions", async ({ page }) => {
  const kursAdi = "Playwright Otomasyon";
  const ogrenciSayisi = 25;
  const diller = ["TS", "JS", "Python"];
  const profil = { id: 1, ad: "mehmet" };
  const onay = true;
  const bosKutu = null;

  //toBe()
  //Bu method degerlerin tam olarak aynı olup olmadigini kontrol eder
  //degerler ayni ise test gecer degilse kalir
  expect(ogrenciSayisi).toBe(25);

  //toEqual()
  //Bu method objectlerin yada arraylerin iceriklerini her bir elemaninin derinlemesine kontrol eder
  expect(diller).toEqual(["TS", "JS", "Python"]); //Array tüm icerigi bire bir aynimi diye kontrol eder
  // expect(diller).toEqual(["JS", "TS", "Python"]);//Arraylerin esit olabilmesi icin aynı indekste ayni eleman olmalidir
  expect(profil).toEqual({ id: 1, ad: "mehmet" });

  //toContain()
  //Bu method bir metin icinde belirli bir öğenin bulunup bulunmadigini kontrol eder
  expect(kursAdi).toContain("Playwright");

  //toHaveLength()
  //Bu method bir arrayin yada bir metnin uzunlugunu yani eleman sayisini kontrol eder
  expect(diller).toHaveLength(3);

  //toBeGreaterThan()
  //Bu method sayisal degerleri karsilastirmak icin kullanilir
  expect(ogrenciSayisi).toBeGreaterThan(20);

  //toBeTruthy()
  //Eger deger null, 0, undefined, false gibi yanlis kabul edilen degerlerden biri degilse test gecer, bunlardan biri ise test kalir
  expect(onay).toBeTruthy();
  expect("HER HANGİ BİR GECERLİ DEGER").toBeTruthy();
  expect("MEHMET").toBeTruthy();
  expect(5).toBeTruthy();

  //toBeFalsy()
  //Eger deger null, 0, undefined, false gibi yanlis kabul edilen degerlerden biri ise test gecer, bunlardan biri degil ise test kalir
  expect(0).toBeFalsy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();


  //toBeNull()
  //bu method bir deger tamamen bosmu yani null mi diye kontrol eder
  expect(bosKutu).toBeNull();

});