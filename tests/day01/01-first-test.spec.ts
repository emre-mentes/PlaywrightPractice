import {test,expect} from "@playwright/test"

/*
syntax
test("buraya testimizin basligini yazariz",()=>{
// testlerimizle ilgili kodlari buraya yazacağız
});
*/

test("Sayfa Basligini dogrula",({page})=>{
    
//Google sayfasina gidelim
page.goto("https://www.google.com");

//Title bilgisini alalim
const title = page.title();

//expect ile title i doğrulayalim
expect(title).toBe("Google");

});