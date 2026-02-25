import { test, expect } from "@playwright/test";

test("test timeout practice", async ({ page }) => {
  //test fonkisyonunun varsayilan timeout süresi 30 saniyedir
  test.setTimeout(5000); //bu test fonksiyonu icin timeout süresini 5 saniye olarak güncelledik

  console.log("test timeout kronometremiz basladi...");

  await page.waitForTimeout(6000); //40000 milisecond boyunca hicbirsey yapmadan bu satirda bekle
  console.log(
    "BU SATIR ASLA OKUNMAYACAK CUNKU TEST 30 SANİYE SONRA TIMEOUT ERROR VEREREK DURDURULACAK",
  );
});

test("action timeout practice", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
  await page.getByRole("button", { name: "Start" }).click({ timeout: 1000 });
});

test('navigation timeout practice', async ({ page }) => {
    //google sayfasinin 100 milisaniye icinde acilmasini aksi halde timeout error vermesini sagladik
    await page.goto("https://google.com",{timeout:100});
});