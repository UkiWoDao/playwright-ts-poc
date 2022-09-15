import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import validUsers from './credentials.json';
import { generateRandomAlphaNumbericString } from './random-generator';

test.describe("Authentication", () => {    
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        // ARRANGE
        loginPage = new LoginPage(page);
        await loginPage.visit();
    })

    for (const User of validUsers) {
        test(`Existing ${User.role} can log in`, async ({ page }) => {
            // ACT
            await loginPage.logInAs(User.email, User.password);
            
            // ASSERT
            await loginPage.expectRedirectToHomepage();
        })
    }

    test("Non-existing user should not be able to log in", async ({ page }) => {
        // ARRANGE
        const randomValidEmail: string = generateRandomAlphaNumbericString(5) + "@gmail.com";
        const randomValidPassword: string = generateRandomAlphaNumbericString(8);

        // ACT
        await loginPage.logInAs(randomValidEmail, randomValidPassword);
        
        // ASSERT
        await loginPage.expectPageNotToRedirect();
    })

});
