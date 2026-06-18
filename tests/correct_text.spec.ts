import {test, expect} from '@playwright/test';

test('intro heading has correct text', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');
    const heading = page.getByRole('heading', { name: 'IntroductionDirect link to' });
    await expect(heading).toHaveText('Introduction');
});

