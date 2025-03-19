import { expect, Locator, Page } from "@playwright/test";

export class ContactPage {
    private page: Page;
    private submitButton: Locator;
    private headerError: Locator;
    private forenameError: Locator;
    private emailError: Locator;
    private messageError: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.submitButton = page.getByRole('link', { name: 'Submit' });
        this.headerError  = page.locator("div.alert.alert-error.ng-scope");

        this.forenameError = page.getByText('Forename is required');
        this.emailError = page.getByText('Email is required');
        this.messageError = page.getByText('Message is required');
    }
  
    async clickSubmit() {
        await this.submitButton.click();
    }

    async checkHeaderErrorMessage(){
        await expect(this.headerError).toBeVisible();
    }

    async checkRequiredFieldsErrorMessages(){
        await expect(this.forenameError).toBeVisible();
        await expect(this.emailError).toBeVisible();
        await expect(this.messageError).toBeVisible();
    }
}