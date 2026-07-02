import {test, expect} from '@playwright/test';

test('Get by label locator', async ({page}) => {
    
    await page.goto ('https://usebasin.com/html-form-generator/feedback-form');
    const denycookies = page.getByRole('button', { name: 'Deny' });
    await denycookies.click();
    await expect(denycookies).not.toBeVisible();
    const name = page.getByRole('textbox', { name: 'name' });
    await name.fill('Cesar Santana');
    // await expect(name).toHaveValue('Cesar Santana');
    await page.pause();
    // const name = page.getByLabel('name');
    // await name.fill('Cesar Santana');
//     await expect(name).toHaveValue('Cesar Santana');
//     const email = page.getByLabel('email');
//     await email.fill('csantana2800@outlook.com');
//     await expect(email).toHaveValue('csantana2800@outlook.com');
});