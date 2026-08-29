import {Page,Locator} from '@playwright/test';
import {BasePage} from './basepage';

export class LogoutPage extends BasePage {
    readonly logoutButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.logoutButton = page.locator("xpath=//a[text()='Log out']");
        this.successMessage = page.locator("xpath=//h1[text()='Logged In Successfully']");
    }

    async logout() {
        await this.logoutButton.click();
    }
    async getSuccessMessage(): Promise<string | null> {
        return this.successMessage.textContent();
    }
}
