import {test, expect} from '@playwright/test';

test('Child Locator', async ({page}) => {
    await page.goto ('https://usebasin.com/html-form-generator/feedback-form');
     const denycookies = await page.getByRole('button', { name: 'Deny' });
    await denycookies.click();
    await expect(denycookies).not.toBeVisible();
    const servicelist = page.getByRole('list');
    const serviceitems = await servicelist.getByRole('listitem').all();
    // expect(serviceitems.length).toBegreaterThan(0);
    const serviceitems2 = await page.locator('ul > li').all();
    for (const item of (serviceitems2)){
        const text = await item.textContent();
        console.log(text);
}
});