import { Page } from "@playwright/test";

export class ShopPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async buyItems(itemName: string, quantity: number) {
    for (let index = 1; index <= quantity; index++) {
        await this.page.locator("//h4[.='"+itemName+"']//following-sibling::p//a").click();
    }
  }
}
