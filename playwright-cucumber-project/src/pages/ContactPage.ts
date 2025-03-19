import { expect, Locator, Page } from "@playwright/test";
import { execArgv } from "process";

export class ContactPage {
    private page: Page;
    private submitButton: Locator;
    
    private headerError: Locator;
    private forenameError: Locator;
    private emailError: Locator;
    private messageError: Locator;
    
    private forenameTextbox: Locator;
    private emailTextbox: Locator;
    private messageTextbox: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.submitButton = page.getByRole('link', { name: 'Submit' });
        this.headerError  = page.locator("div.alert.alert-error.ng-scope");

        this.forenameError = page.getByText('Forename is required');
        this.emailError = page.getByText('Email is required');
        this.messageError = page.getByText('Message is required');

        this.forenameTextbox =  page.getByRole('textbox', { name: 'Forename *' });
        this.emailTextbox = page.getByRole('textbox', { name: 'Email *' });
        this.messageTextbox = page.getByRole('textbox', { name: 'Message *' });
    }
  
    async clickSubmit() {
        await this.submitButton.click();
    }

    async checkHeaderErrorMessage(isVisible: boolean){
        if (isVisible){
            await expect(this.headerError).toBeVisible();
        } else {
            await expect(this.headerError).not.toBeVisible();
        }
    }

    async checkRequiredFieldsErrorMessages(isVisible: boolean){
        if (isVisible){
            await expect(this.forenameError).toBeVisible();
            await expect(this.emailError).toBeVisible();
            await expect(this.messageError).toBeVisible();
        } else {
            await expect(this.forenameError).not.toBeVisible();
            await expect(this.emailError).not.toBeVisible();
            await expect(this.messageError).not.toBeVisible();
        }
    }

    async fillRequiredFields(forename: string, email: string, message: string){
        await this.forenameTextbox.fill(forename);
        await this.emailTextbox.fill(email);
        await this.messageTextbox.fill(message);
    }
}