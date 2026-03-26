import {test, expect} from "../../fixtures/auth.fixture"

test('login olmus fixture kullanimi', async ({ loggedInPage }) => {

    await expect(loggedInPage.getByText("Products")).toBeVisible();
    
});


/**
 * HOMEWORK:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
sitesine login olmus bir custom page fixture üzerinden dashboard görünür oldugunu test edelim
 */