import { Locator, Page } from '@playwright/test';
import { EvaluationPage } from './EvaluationPage';
import { HomePage } from './HomePage';

export class StoaHeader {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly evaluationLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('a', { hasText: 'home' });
        this.evaluationLink = page.locator('a', { hasText: 'evaluations' });
    }

    async openHomeLink() : Promise<HomePage> {
        await this.homeLink.click();
        return new HomePage(this.page);
    }

    async openEvaluationLink(): Promise<EvaluationPage> {
        await this.evaluationLink.click();
        return new EvaluationPage(this.page);
    }
}
