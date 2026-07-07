import {test} from '@playwright/test';

test('Login with invalid credentials', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    const usernamefield = page.getByRole('textbox', { name: 'Username' });
    await usernamefield.fill('Cesar Santana');
    const passwordfield = page.getByRole('textbox', { name: 'Password' });
    await passwordfield.fill('SuperSecretPassword!');
    const loginbutton = page.getByRole('button', { name: 'Login' });
    await loginbutton.click();
});
    test('Login with valid credentials', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    const usernamefield = page.getByRole('textbox', { name: 'Username' });
    await usernamefield.fill('tomsmith');
    const passwordfield = page.getByRole('textbox', { name: 'Password' });
    await passwordfield.fill('SuperSecretPassword!');
    const loginbutton = page.getByRole('button', { name: 'Login' });
    await loginbutton.click();
});