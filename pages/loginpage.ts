import {Page, Locator} from "@playwright/test";
import {BasePage} from "./basepage";



export class Loginpage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('#submit');
        this.successMessage = page.locator("//div[text()='Your username is invalid!']");
    }
    

    async navigate()
    {
        await this.goto('https://practicetestautomation.com/practice-test-login/');
    }
    
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

      async getSuccessMessage(): Promise<string | null> {
        return this.successMessage.textContent();
    }

}