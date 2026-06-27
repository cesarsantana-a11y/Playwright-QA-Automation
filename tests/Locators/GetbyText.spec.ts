import {test, expect} from '@playwright/test';

test('Get by text locator', async ({page}) => {
    await page.goto('https://support.saucelabs.com/s/');
    const textLocator = page.getByText('Sauce Labs Support Center provides our customers with support services via our support portal and email.', { exact: true });
    await expect(textLocator).toBeVisible();
});