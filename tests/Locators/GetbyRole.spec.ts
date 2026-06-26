import {test, expect} from '@playwright/test';

test('Get by role', async ({ page }) => { 
  await page.goto('https://www.rockstargames.com/');
  const rejectbutton = await page.getByRole('button', { name: 'REJECT ALL' });  
    await expect(rejectbutton).toBeVisible();
    await rejectbutton.click();
})
  
test('Get by role - accept', async ({ page }) => {
  await page.goto('https://www.rockstargames.com/');
  const acceptbutton = await page.getByRole('button', { name: 'ACCEPT ALL' });
  await expect(acceptbutton).toBeVisible();
  await acceptbutton.click();
  await expect(acceptbutton).not.toBeVisible();
})

// test('Get by role - link', async ({ page }) => {
//     await page.goto('https://www.rockstargames.com/');
//     const link = page.getByRole('link', { name: 'Learn More', exact: true });
//     const rejectbutton = await page.getByRole('button', { name: 'REJECT ALL' });
//     await rejectbutton.click();
//     await expect(link).toBeVisible();
//     await link.click();
// })