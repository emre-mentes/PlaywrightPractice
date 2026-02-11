import {test,expect} from "@playwright/test"

/*
syntax
test("buraya testimizin basligini yazariz",()=>{
// testlerimizle ilgili kodlari buraya yazacağız
});


promise : Tamamlanmasi zaman alacak bir islemin sonucunu o sonuc gelene kadar kod icinde temsil eder, ve hatasiz testler yazabilmek icin promise return eden bir methodun basina mutlaka await keywordunu koymaliyiz

await : asenkron bir islemden sonuc gerceklesene kadar kodun bir alt satira devam etmesini duraklatan komuttur

async : bir fonksiyon icinde await(bekleme) yapilabileceğini ve bu fonksiyon icinde promise return eden yapilar bulundugunu belirtir
ve await kullanabilmek icin fonkisyonu async olarak isaretlememiz gerekir
*/

test("Sayfa Basligini dogrula",async({page})=>{
    
//Google sayfasina gidelim
await page.goto("https://www.google.com");

//Title bilgisini alalim
const title : string = await page.title();

//expect ile title i doğrulayalim
expect(title).toBe("Google");

});