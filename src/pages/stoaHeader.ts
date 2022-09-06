import { expect, Locator, Page } from '@playwright/test';

export class StoaHeader {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly evaluationLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('a', { hasText: 'home' });
        this.evaluationLink = page.locator('a', { hasText: 'evaluations' });
    }

    async openHomeLink() {
        await this.homeLink.click();
    }

    async openEvaluationLink() {
        await this.evaluationLink.click();
    }
}