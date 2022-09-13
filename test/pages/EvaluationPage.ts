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

    async open() : Promise<EvaluationPage> {
        // this.page.goto(this.url);
        return this;
    }

    async openNewEvaluationLink() : Promise<EvaluationPage> {
        this.newEvaluationTabLink.click();
        return this;
    }
    
    async openInProgressLink() : Promise<EvaluationPage> {
        this.inProgressTabLink.click();
        return this;
    }

    async openCompletedLink() : Promise<EvaluationPage> {
        this.completedTabLink.click();
        return this;
    }
}
