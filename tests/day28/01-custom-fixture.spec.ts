import { test as base, expect } from "@playwright/test";
type MyFixtures = {
  mesaj: string;
};

const test = base.extend<MyFixtures>({
  mesaj: async ({}, use) => {
    console.log("1. Setup hazirliklari yapiliyor..");
    await use("Merhaba ben fixture den geliyorum");
    console.log("3. Teardown test sonrasi temizlik yapiliyor..");
  },
});


test("fixture mekanizmasini kesfediyoruz", async ({ mesaj }) => {
  console.log("2. Test fonksiyonu calisiyor", mesaj);
});
