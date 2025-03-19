import { Given, When, Then } from "@cucumber/cucumber";
import { ContactPage } from "../pages/ContactPage";

let contactPage: ContactPage;

When("I submit the feedback", async function () {
  contactPage = new ContactPage(this.page);
  await contactPage.clickSubmit();
});

Then("I can see header page error messages", async function () {
  await contactPage.checkHeaderErrorMessage(true);
});

Then("I can see error messages from required fields", async function () {
  await contactPage.checkRequiredFieldsErrorMessages(true);
});

When('I populate the mandatory fields', async function (dataTable) {
  contactPage = new ContactPage(this.page);  
  const data = dataTable.hashes(); // Converts table rows into an array of objects

    for (const row of data) {
        await contactPage.fillRequiredFields(row.Forename, row.Email, row.Message);
    }
  });

Then('header page error message will be removed', async function () {
    await contactPage.checkHeaderErrorMessage(false);
  });

Then('error messages from required fields will be removed', async function () {
    await contactPage.checkRequiredFieldsErrorMessages(false);
  });

Then('the feedback is submitted successfully', async function () {
  await contactPage.checkSuccessfulSubmission();
});