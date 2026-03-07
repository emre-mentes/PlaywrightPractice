import {
  test,
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  Page,
} from "@playwright/test";

test("farkli browserlar ile page objectleri olusturma", async () => {
  //launch(); methodu ile bir browseri baslatiriz
  //Browser tarayiciyi temsil eder
  const chromiumBrowser: Browser = await chromium.launch();
  const fireFoxBrowser: Browser = await firefox.launch();
  const webkitBrowser: Browser = await webkit.launch();

  //newContext() methodu sayesinde her bir browserda izole bir oturum actik
  //Context o browser icindeki gizli bir oturum acmis gibi izole bir calisma ortami saglar
  const chromiumContext: BrowserContext = await chromiumBrowser.newContext();
  const fireFoxContext: BrowserContext = await fireFoxBrowser.newContext();
  const webkitContext: BrowserContext = await webkitBrowser.newContext();

  //newPage() methodu ile context icinde yeni bir gizli sekme actik
  const googlePage: Page = await chromiumContext.newPage();
  await googlePage.goto("https://www.google.com");
  console.log("Chromium google title", await googlePage.title());

  const amazonPage = await fireFoxContext.newPage();
  await amazonPage.goto("https://www.amazon.com");
  console.log("Firefox amazon title", await amazonPage.title());

  const linkedinPage = await webkitContext.newPage();
  await linkedinPage.goto("https://www.linkedin.com");
  console.log("Webkit Linkedin title", await linkedinPage.title());

});
