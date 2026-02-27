import { test, expect } from "@playwright/test";

/*
 Hard Assertion => Bir expect() ile yaptigimiz assertion fail oldugu anda test fonkiyonundaki sonraki satirlar artik calistirilmaz, programin akisi fail olan yerde durur

 Soft Assertion => Bir expect() ile yaptigimiz assertion fail olsa bile test durmaz,
 test fonksyonu icindeki kalan tüm adimlar calismaya devam eder, en sonunda tum hatalar raporlanir
*/

test("soft assertions", async ({ page }) => {
  const kursAdi = "Playwright Otomasyon";
  const ogrenciSayisi = 25;
  const diller = ["TS", "JS", "Python"];
  const profil = { id: 1, ad: "mehmet" };
  const onay = true;
  const bosKutu = null;

  expect.soft(ogrenciSayisi).toBe(26);

  expect.soft(diller).toEqual(["TS", "JS", "Python"]);

  expect.soft(profil).toEqual({ id: 1, ad: "ahmet" });

  expect.soft(kursAdi).toContain("selenium");

  expect.soft(diller).toHaveLength(3);

  expect.soft(ogrenciSayisi).toBeGreaterThan(45);

  expect.soft(onay).toBeTruthy();

  expect.soft(0).toBeFalsy();

  expect.soft(bosKutu).toBeNull();
  
});
