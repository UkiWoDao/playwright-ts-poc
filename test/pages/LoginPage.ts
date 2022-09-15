import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator("input[name = 'email']");
        this.passwordField = page.locator("input[name = 'password']");
        this.submitButton = page.locator("[type='submit']");
    }

    async visit() {
        await this.page.goto('/login');
    }

    async logInAs(email: string, password: string) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }

    async expectRedirectToHomepage() {
        this.expectUrlToBe('/');
    }

    async expectPageNotToRedirect() {
        this.expectUrlToBe('/login');
    }

    private async expectUrlToBe(path: string) {
        await expect(this.page).toHaveURL(path);
    }

}
