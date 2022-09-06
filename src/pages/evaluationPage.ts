import { Locator, Page } from "@playwright/test";

export class EvaluationPage {
    readonly page: Page;
    readonly newEvaluationTabLink: Locator;
    readonly inProgressTabLink: Locator;
    readonly completedTabLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newEvaluationTabLink = page.locator('a', { hasText: 'new evaluation' });
        this.inProgressTabLink = page.locator('a', { hasText: 'in progress' });
        this.completedTabLink = page.locator('a', { hasText: 'completed' });
    }

    async openNewEvaluationLink() {
        this.newEvaluationTabLink.click();
    }
    
    async openInProgressLink() {
        this.inProgressTabLink.click();
    }

    async openCompletedLink() {
        this.completedTabLink.click();
    }
}