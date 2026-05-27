import { test, expect, Page } from '@playwright/test';

// test.describe.configure({ mode: 'parallel' });
// test.describe.configure({ mode: 'serial' });

test('@Web Popup validations', async ({ page }: { page: Page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // await page.goto("http://google.com");
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible();

    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    // Handle alert/confirm popup
    page.on('dialog', async (dialog) => {
        await dialog.accept();
    });

    await page.locator('#confirmbtn').click();

    await page.locator('#mousehover').hover();

    const framesPage = page.frameLocator('#courses-iframe');

    await framesPage
        .locator("li a[href*='lifetime-access']:visible")
        .click();

    const textCheck = await framesPage.locator('.text h2').textContent();

    if (textCheck) {
        console.log(textCheck.split(' ')[1]);
    }

});


test('Screenshot & Visual comparison', async ({ page }: { page: Page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await expect(page.locator('#displayed-text')).toBeVisible();

    await page
        .locator('#displayed-text')
        .screenshot({ path: 'partialScreenshot.png' });

    await page.locator('#hide-textbox').click();

    await page.screenshot({ path: 'screenshot.png' });

    await expect(page.locator('#displayed-text')).toBeHidden();

});


// Screenshot → store → screenshot comparison
test('visual', async ({ page }: { page: Page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await expect(await page.screenshot()).toMatchSnapshot('landing.png');

});