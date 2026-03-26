import { test as base } from "@playwright/test";
type MyFixtures = {
  mesaj: string;
};

export const test = base.extend<MyFixtures>({
  mesaj: async ({}, use) => {
    console.log("1. Setup hazirliklari yapiliyor..");
    await use("Merhaba ben fixture den geliyorum");
    console.log("3. Teardown test sonrasi temizlik yapiliyor..");
  },
});

export {expect} from "@playwright/test";