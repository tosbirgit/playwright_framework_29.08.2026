// src/pages/BasePage.ts
import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async waitForVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}