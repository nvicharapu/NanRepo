import { Given, When, Then } from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
import { LoginPage } from '../../pageobjects/LoginPage';

setDefaultTimeout(60 * 1000);

let loginPage: LoginPage;

Given(
  "the user enters the base URL {string}",
  async function (url: string) {

    // ✅ Use existing page (DO NOT CREATE browser/page manually)
    loginPage = new LoginPage(this.page);

    await this.page.goto(url);

    await loginPage.goTo();
  }
);