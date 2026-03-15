import * as dotenv from "dotenv"


//.env dosyasini okuyup icindeki tum değiskenleri process.env objectine yukluyoruz, artik bu sayede process.env.DEGİSKEN_ADI seklinde değiskenlere erisebiliriz
//process Node.js in yerlesik ve global bir objectidir ve programin calistigi ortam hakkinda bilgileri tutar
dotenv.config();


const validUserNAME =process.env.SAUCEDEMO_USERNAME_VALID;
console.log("validUserNAME :",validUserNAME);

const validPassword = process.env.SAUCEDEMO_PASSWORD_VALID;
console.log("validPassword :", validPassword);

const baseUrl = process.env.BASE_URL;
console.log("BASE_URL :", baseUrl);

