import { Locator, Page } from "@playwright/test";

export class GlobalPage {
    private page: Page;
    private contactNav: Locator;
    private shopNav: Locator;
    private cartNav: Locator;

    constructor(page: Page) {
      this.page = page;
      this.contactNav = page.getByRole('link', { name: 'Contact' });
      this.shopNav = page.getByRole('link', { name: 'Shop', exact: true });
      this.cartNav = page.getByRole('link', { name: 'Cart' });
    }
  
    async clickContactNav() {
      await this.contactNav.click();
    }

    async clickShopNav() {
      await this.shopNav.click();
    }

    async clickCartNav() {
      await this.cartNav.click();
    }
}