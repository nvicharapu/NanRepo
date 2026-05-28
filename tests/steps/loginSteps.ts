import { Given, When, Then } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "playwright";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pageobjects/LoginPage";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000); 


/*

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

//
// ✅ Launch browser + navigate
//
Given(
  "the user enters the base URL {string}",
  async (url: string) => {
    browser = await chromium.launch({ headless: false });
   page = await browser.newPage();

    loginPage = new LoginPage(page);

    // ✅ Using POM method (best practice)
    // LoginPage.goTo() doesn't accept arguments, use it without params
    await loginPage.goTo();
  }
);

//
// ✅ Perform login (using POM)
//
When("the user enters {string} and {string}",async (username: string, password: string) => {
    await loginPage.userName.fill(username);
    await loginPage.password.fill(password);
  }
);

//
// ✅ Validate login success
//
Then("the user should be logged in successfully with the URL {string}",async (expectedUrl: string) => {
    await loginPage.signInbutton.click();
    // Wait for navigation to expected URL
    await page.waitForURL(expectedUrl);

    // Assertion
    expect(page.url()).toContain(expectedUrl);

    // Close browser
    await browser.close();
  }
);

*/