import { test, expect } from "@playwright/test";

// ============================================
// GRUP 1: SMOKE TESTS — Temel kontroller
// AMAÇ: Uygulamanın en temel fonksiyonlarının
// çalışıp çalışmadığını hızlıca doğrulamak.
// Smoke testler genellikle ilk çalıştırılan
// testlerdir. "Sistem ayakta mı?" sorusunu yanıtlar.
// ============================================

test.describe("Smoke Tests", () => {
  // AMAÇ: Google ana sayfasına gidildiğinde sayfa başlığının
  // "Google" kelimesini içerip içermediğini kontrol ediyoruz.
  // Bu test sayfanın düzgün yüklendiğini doğrular.
  // BEKLENEN SONUÇ: ✅ PASS — Başlık "Google" içeriyor.
  test("✅ Google ana sayfa aciliyor mu?", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle(/Google/);
  }); // AMAÇ: Sayfaya gidildikten sonra tarayıcının adres çubuğundaki
  // URL'nin "google" kelimesini içerip içermediğini kontrol ediyoruz.
  // Yanlış bir yönlendirme (redirect) olup olmadığını anlarız.
  // BEKLENEN SONUÇ: ✅ PASS — URL "google" içeriyor.

  test("✅ Sayfa URL'si doğru mu?", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveURL(/google/);
  }); // AMAÇ: Allure raporunda FAIL görünümünü öğrencilere göstermek için
  // kasıtlı olarak yanlış bir başlık beklentisi yazıyoruz.
  // Gerçek projede bu test yazılmaz — sadece eğitim amaçlı.
  // Raporda kırmızı renk, hata mesajı ve ekran görüntüsü göreceğiz.
  // BEKLENEN SONUÇ: ❌ FAIL — Başlık "Bu başlık kesinlikle yanlış" değil.

  test("❌ Yanlış title kontrolü — FAIL görmek için", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Bu başlık kesinlikle yanlış");
  });
});


// ============================================
// GRUP 2: REGRESSION TESTS — Detaylı kontroller
// AMAÇ: Uygulamaya yeni bir özellik eklendiğinde veya
// kod değiştirildiğinde, eski özelliklerin hâlâ
// çalışıp çalışmadığını doğrulamak.
// "Yeni şey eklerken eskiyi bozduk mu?" sorusunu yanıtlar.
// ============================================

test.describe("Regression Tests", () => {
  // AMAÇ: Google ana sayfasındaki arama kutusunun
  // kullanıcı tarafından görülebilir ve erişilebilir
  // olduğunu doğruluyoruz.
  // Arama kutusu yoksa kullanıcı hiçbir şey yapamaz.
  // BEKLENEN SONUÇ: ✅ PASS — Arama kutusu görünüyor.
  test("✅ Google arama kutusu görünüyor mu?", async ({ page }) => {
    await page.goto("https://www.google.com");
    const searchBox = page.locator('textarea[name="q"]');
    await expect(searchBox).toBeVisible();
  }); // AMAÇ: Arama kutusuna metin yazıp Enter'a basıldığında
  // sonuç sayfasına yönlendirilip yönlendirilmediğini kontrol ediyoruz.
  // URL'de "search" kelimesi varsa arama başarıyla gerçekleşmiş demektir.
  // BEKLENEN SONUÇ: ✅ PASS — URL "/search" içeriyor.

  test("✅ Arama yapılabiliyor mu?", async ({ page }) => {
    await page.goto("https://www.google.com");
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.fill("Playwright test automation");
    await searchBox.press("Enter");
    await expect(page).toHaveURL(/search/);
  }); // AMAÇ: Allure raporunda "element bulunamadı" hatasının
  // nasıl göründüğünü öğrencilere göstermek için
  // sayfada olmayan bir elementi arıyoruz.
  // Raporda timeout hatası ve ekran görüntüsü göreceğiz.
  // BEKLENEN SONUÇ: ❌ FAIL — "#bu-element-yok" sayfada yok.

  test("❌ Var olmayan element — FAIL görmek için", async ({ page }) => {
    await page.goto("https://www.google.com");
    const fakeButton = page.locator("#bu-element-yok");
    await expect(fakeButton).toBeVisible({ timeout: 3000 });
  }); // AMAÇ: Sayfanın performansını ölçüyoruz.
  // Yükleme süresi 3 saniyeyi geçiyorsa kullanıcı deneyimi
  // olumsuz etkilenir. Bu test bir performans eşiği koyar.
  // BEKLENEN SONUÇ: ✅ PASS — Google 3 saniyeden hızlı yükleniyor.

  test("✅ Sayfa 3 saniyede yükleniyor mu?", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("https://www.google.com");
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });
});

// ============================================
// GRUP 3: UI TESTS — Görsel kontroller
// AMAÇ: Kullanıcının ekranda gördüğü arayüz elementlerinin
// doğru şekilde gösterilip gösterilmediğini kontrol etmek.
// "Kullanıcı gözüyle her şey yerli yerinde mi?" sorusunu yanıtlar.
// ============================================

test.describe("UI Tests", () => {
  // AMAÇ: Google logosunun sayfada görünür olduğunu doğruluyoruz.
  // Logo görünmüyorsa sayfanın tasarımında bir sorun var demektir.
  // img elementinin "alt" attribute'unu kullanarak logoyu buluyoruz.
  // BEKLENEN SONUÇ: ✅ PASS — Logo görünüyor.
  test("✅ Google logosu görünüyor mu?", async ({ page }) => {
    await page.goto("https://www.google.com");
    const logo = page.locator('img[alt="Google"]');
    await expect(logo).toBeVisible();
  }); // AMAÇ: Allure raporunda "tıklanamayan element" hatasının
  // nasıl göründüğünü öğrencilere göstermek için
  // sayfada olmayan bir butonu tıklamaya çalışıyoruz.
  // Raporda click hatası, stack trace ve ekran görüntüsü göreceğiz.
  // BEKLENEN SONUÇ: ❌ FAIL — "#olmayan-buton" sayfada yok.

  test("❌ Olmayan butona tıklama — FAIL görmek için", async ({ page }) => {
    await page.goto("https://www.google.com");
    await page.click("#olmayan-buton", { timeout: 3000 });
  }); // AMAÇ: Sayfanın bir başlığa sahip olduğunu doğruluyoruz.
  // Başlık boşsa sayfa düzgün yüklenmemiş ya da
  // bir yapılandırma hatası var demektir.
  // BEKLENEN SONUÇ: ✅ PASS — Başlık en az 1 karakter içeriyor.

  test("✅ Sayfa başlığı boş değil mi?", async ({ page }) => {
    await page.goto("https://www.google.com");
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });
});