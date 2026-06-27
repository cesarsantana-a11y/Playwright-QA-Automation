import {test, expect} from '@playwright/test';

test('Get by label locator', async ({page}) => {
    
    await page.goto ('https://usebasin.com/html-form-generator/feedback-form');
    const denycookies = await page.getByRole('button', { name: 'Deny' });
    await denycookies.click();
    await expect(denycookies).not.toBeVisible();
   
    test('Fill form', async () => {
        const name = page.getByLabel('name');
        await name.fill('Cesar Santana');

    const email = page.getByLabel('email');
    
    await email.fill ('csantana2800@outlook.com');

});