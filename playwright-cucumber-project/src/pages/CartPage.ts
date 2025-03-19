import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
  private page: Page;
  private total: Locator;

  constructor(page: Page) {
    this.page = page;
    this.total = page.getByText('Total:');
  }

  async checkPriceValue(itemName: string, amountPerItem: string) {
    await expect(this.page.locator('//td[contains(.," '+itemName+'")]//..//td[contains(.,"$'+amountPerItem+'")]')).toBeVisible();
  }

  async checkSubTotalValue(itemName: string, amountPerItem: number) {
    let quantityStr: string = await this.page.locator("//td[.=' "+itemName+"']//following-sibling::td[2]//input").inputValue();

    let quantityNum: number = parseInt(quantityStr);

    let expectedSubtotal : number = amountPerItem * quantityNum;
    
    let actualSubtotalValueStr: string = await this.page.locator("//td[.=' "+itemName+"']//following-sibling::td[3]").innerText();
    let actualSubtotalValueNum : number = parseFloat(actualSubtotalValueStr.replace("$", ""));

    expect(expectedSubtotal.toFixed(2)).toEqual(actualSubtotalValueNum.toFixed(2));
  }

  async verifyGrandTotalValue(grandTotal: string) {
    let actualTotal : string = await this.total.innerText();
    actualTotal = "$" + actualTotal.substring(7);
    expect(grandTotal).toEqual(actualTotal);
  }
}
