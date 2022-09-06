import { test, expect } from '@playwright/test';
import { StoaHeader } from '../pages/StoaHeader';

test('User can navigate to evaluations from header link', async ({ page }) => {
    const stoaHeader = new StoaHeader(page);
    const baseUrl : string = 'http://127.0.0.1:5173/';
    await page.goto(baseUrl);
    await stoaHeader.openEvaluationLink();
    await expect(page).toHaveURL(baseUrl + 'evaluations');
});
