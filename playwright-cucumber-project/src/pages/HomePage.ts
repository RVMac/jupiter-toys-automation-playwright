import { Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://jupiter.cloud.planittesting.com/#/");
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
