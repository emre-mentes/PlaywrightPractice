import { test as base, expect, Page } from "@playwright/test";

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    await page.goto("https://www.saucedemo.com");
    await page.getByTestId("username").fill("standard_user");
    await page.getByTestId("password").fill("secret_sauce");
    await page.getByTestId("login-button").click();
    await expect(page.getByText("Products")).toBeVisible();    
    await use(page);
  },
});

export {expect} from "@playwright/test"


