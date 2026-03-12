import { faker } from "@faker-js/faker";

/**
 * Her çağrıldığında rastgele form verisi üretir ve bir obje olarak döndürür.
 *
 * @returns Aşağıdaki alanları içeren bir obje döndürür:
 *   - `text`     → 2 rastgele kelime         (örn: "amet dolor")
 *   - `search`   → rastgele ürün adı         (örn: "Ergonomic Wooden Chair")
 *   - `password` → 10 karakterli şifre       (örn: "xK9#mP2@qL")
 *   - `email`    → geçerli formatta e-posta  (örn: "john.doe42@gmail.com")
 *   - `url`      → geçerli web adresi        (örn: "https://example.org")
 *   - `tel`      → telefon numarası          (örn: "+1-555-867-5309")
 *   - `none`     → ad ve soyad              (örn: "Alice Johnson")
 *
 * @example
 * const data = getTextInputsFormData();
 * console.log(data.email);    // → "john.doe42@gmail.com"
 * console.log(data.password); // → "xK9#mP2@qL"
 *
 * @example
 * // Her çağrıda farklı değerler üretilir
 * const data1 = getTextInputsFormData();
 * const data2 = getTextInputsFormData();
 * console.log(data1.email); // → "john.doe42@gmail.com"
 * console.log(data2.email); // → "mary.smith99@yahoo.com"  (farklı!)
 */
export function getTextInputsFormData() {
  return {
    text: faker.lorem.words(2),
    search: faker.commerce.productName(),
    password: faker.internet.password({ length: 10 }),
    email: faker.internet.email(),
    url: faker.internet.url(),
    tel: faker.phone.number(),
    none: faker.person.fullName(),
  };
}