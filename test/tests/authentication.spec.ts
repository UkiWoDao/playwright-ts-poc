import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import validUsers from './credentials.json';

test.describe("Authentication", () => {    
    for (const User of validUsers) {
        test(`Existing ${User.role} can log in`, async ({ page }) => {
            // ARRANGE
            const loginPage = new LoginPage(page);
            await loginPage.open();
    
            // ACT
            await loginPage.logInAs(User.email, User.password);
            
            // ASSERT
            await expect(page).toHaveURL('https://portico.dev.stoaeng.com/');
        })
    }

});