import * as xlsx from "xlsx"

const workbook= xlsx.readFile("test-data/loginTestData.xlsx");
const sheetName= workbook.SheetNames[0]

const sheet = workbook.Sheets[sheetName];
const testData = xlsx.utils.sheet_to_json(sheet)

console.log(testData)


