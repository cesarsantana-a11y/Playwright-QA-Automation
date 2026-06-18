import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login?redirectUrl=%2Fsettings%2Fusers');
  await page.locator('rect').first().click();
  await page.getByRole('textbox', { name: 'Email' }).fill('csafjfcnenaks@sdasd');
  await page.getByRole('textbox', { name: 'Password' }).fill('casdsafaewqfwfd');
});