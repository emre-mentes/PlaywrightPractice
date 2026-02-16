import {test,expect} from "@playwright/test"

/*
syntax
test("buraya testimizin basligini yazariz",()=>{
// testlerimizle ilgili kodlari buraya yazacağız
});

promise : Tamamlanmasi zaman alacak bir islemin sonucunu o sonuc gelene kadar kod icinde temsil eder, 
ve hatasiz testler yazabilmek icin promise return eden bir methodun basina mutlaka await keywordunu koymaliyiz

await : asenkron bir islemden sonuc gerceklesene kadar kodun bir alt satira devam etmesini duraklatan komuttur

async : bir fonksiyon icinde await(bekleme) yapilabileceğini ve bu fonksiyon icinde promise return eden yapilar bulundugunu belirtir
ve await kullanabilmek icin fonkisyonu async olarak isaretlememiz gerekir
*/

test("Sayfa Basligini dogrula",async({page})=>{
    
  await page.goto('https://www.techproeducation.com/');
  await expect(page.locator('#react-header').getByRole('link', { name: 'TechPro Education' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Programs');
  await expect(page.getByRole('textbox', { name: 'Search Program' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Search Program' }).click();
  await page.getByRole('textbox', { name: 'Search Program' }).fill('emre');
  await expect(page.getByRole('textbox', { name: 'Search Program' })).toHaveValue('emre');
  await page.locator('.owl-item.active > .single-slide > a').click();

});
