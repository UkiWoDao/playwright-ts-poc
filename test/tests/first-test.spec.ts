import { test, expect } from '@playwright/test';
import { StoaHeader } from '../pages/StoaHeader';

test.describe("test suite @suite", () => {
    test('User can navigate to evaluations from header link', async ({ page }) => {
        const stoaHeader = new StoaHeader(page);
        await page.goto('/');
        await stoaHeader.openEvaluationLink();
        await expect(page).toHaveURL('$/evaluations');
    })
});
