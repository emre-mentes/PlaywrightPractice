import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
dotenv.config();

// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({

  globalTimeout: 120000, //test dosyasindaki tüm testleri icin toplamda bitmesi gereken süreyi tanimladik

  timeout:40000,//Her bir test fonksiyonu icin blogun baslangıcından bitisine kadar gereken süreyi ayarladik, default olarak 30000 ms dir

  expect :{
    timeout:6000//expect komutlari ile doğrulamalar icin süreyi güncelleyebiliriz, default 5000 ms
  },


  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    //baseURL: process.env.BASE_URL || "https://www.saucedemo.com/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot:"only-on-failure",
    video:"retain-on-failure",
    trace:"retain-on-failure",
    testIdAttribute: "data-test",

    actionTimeout:10000, // click(), fill().. gibi actionlarda elemanin hazir olmasi icin 10 saniyelik bir limit tanimladik, default suresi yok, test timeouta tabidir
    
    navigationTimeout: 15000//page.goto() ile bir sayfanin tamamen yuklenmesi icin ayarlanan bir üst sınırdır.

  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: "iphone 13",
      use: { ...devices["iPhone 13"] },
    },
    {
      name: "ipad mini",
      use: { ...devices["iPad Mini"] },
    },
    {
      name: "galaxy s8",
      use: { ...devices["Galaxy S8"] },
    },

    {
      name:"setup",
      testMatch:"**/auth.setup.ts"
    },

    {
      name: "smoke",
      use: { 
        ...devices["Desktop Chrome"],
        headless: false,
        viewport : {width:750,height:750},
        storageState:"playwright/.auth/user.json"
      },
      testMatch:"**/smoke/*.spec.ts",
      dependencies: ["setup"],//smoke testleri calistirmadan önce setup projectini calistir
    },


    {
      name: "batch366",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});