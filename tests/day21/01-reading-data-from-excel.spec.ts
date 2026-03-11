import * as xlsx from "xlsx" 

//Belirttigimiz klasöre gider ve excel dosyasinin tamamini bir bütün olarak kodumuzun icine dahil eder
const workbook = xlsx.readFile("test-data/loginTestData.xlsx");

//excel dosyasindaki tüm sayfa isimlerine bakar ve index ile sayfa ismi secmemizi saglar, index 0 girdigimiz icin ilk sayfa ismini secmis olduk
const sheetName = workbook.SheetNames[0];

//köseli parantez icinde belirteceğimiz sayfanın tüm tablo icerigini bize verir
const sheet = workbook.Sheets[sheetName];

const testData : any[] = xlsx.utils.sheet_to_json(sheet);

console.log(testData);
/*
[
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
  { username: 'error_user', password: 'secret_sauce' },
  { username: 'visual_user', password: 'secret_sauce' }
]
*/