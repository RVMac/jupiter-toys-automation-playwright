import { When } from "@cucumber/cucumber";
import { GlobalPage } from "../pages/GlobalPage";
import { ShopPage } from "../pages/ShopPage";

let shopPage: ShopPage;
let globalPage: GlobalPage;

When('I buy the following items:', async function (dataTable) {
    shopPage = new ShopPage(this.page);
    const data = dataTable.hashes();
    for (const row of data) {
        await shopPage.buyItems(row.ItemName, row.Quantity);
    }
});

When('I navigate to Cart page', async function () {
   globalPage = new GlobalPage(this.page);
   await globalPage.clickCartNav();
});