import { test, chromium } from '@playwright/test';

test('Close cookies', async ({ page }) => {
  await page.goto('https://www.rockstargames.com/');
  await page.getByRole('button', { name: 'REJECT ALL' }).click();
});

test('Are the cookies still there?', async ({ page }) => {
  await page.goto('https://www.rockstargames.com/');
 await page.pause();
});

test('Browser fixture', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.rockstargames.com/');
});

test('Create page manually', async () => {
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();    
await page.goto('https://www.rockstargames.com/')
});