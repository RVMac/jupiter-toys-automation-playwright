import { Locator, Page } from "@playwright/test";

export class GlobalPage {
    private page: Page;
    private contactNav: Locator;

    constructor(page: Page) {
      this.page = page;
      this.contactNav = page.getByRole('link', { name: 'Contact' });
    }
  
    async clickContactNav() {
      await this.contactNav.click();
    }
}
  