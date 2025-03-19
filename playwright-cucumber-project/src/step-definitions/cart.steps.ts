import { Given, When, Then } from "@cucumber/cucumber";
import { GlobalPage } from "../pages/GlobalPage";
import { CartPage } from "../pages/CartPage";

let cartPage: CartPage;
let globalPage: GlobalPage;

Then('the price and subtotal value for each product is correct', async function (dataTable) {
    cartPage = new CartPage(this.page);

    const data = dataTable.hashes();
    for (const row of data) {
        await cartPage.checkPriceValue(row.ItemName, row.AmountPerItem);
        await cartPage.checkSubTotalValue(row.ItemName, row.AmountPerItem);
    }
});

Then('the grand total value is equal to {string}', async function (grandTotal) {
    await cartPage.verifyGrandTotalValue(grandTotal)
});