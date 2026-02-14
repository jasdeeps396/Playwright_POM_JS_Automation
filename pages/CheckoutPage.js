import { expect } from "@playwright/test";

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.checkoutInformationPage = page.locator("text='Personal Information '")
        this.cvvCodeTextbox = page.locator("//div[text()='CVV Code ']/..//input")
        this.cardHolderNameTextbox = page.locator("//div[text()='Name on Card ']/..//input")
        this.selectCountryLocator = page.getByPlaceholder("Select Country");
        this.countryResultsLocator = page.locator(".ta-results")
        this.placeOrderButton= page.getByText("Place Order")
        this.orderIdLocator = page.locator(".em-spacer-1 .ng-star-inserted")


    }

    // checkout page loaded successfully

    async verifyCheckoutPageLoadedSuccessfully() {
        await expect(this.checkoutInformationPage).toBeVisible()
    }

    // Fill payment details

    async fillPaymentDetails(cvvCode, cardHolderName) {
        await this.cvvCodeTextbox.fill(cvvCode)
        await this.cardHolderNameTextbox.fill(cardHolderName)
    }

    async selectCountryCheckoutPage(pressCountryName, selectCountryName) {
        await this.selectCountryLocator.pressSequentially(pressCountryName);
        await this.countryResultsLocator.getByRole('button').getByText(selectCountryName).nth(1).click()
    }

    async clickOnPlaceOrderButton()
    {
        await this.placeOrderButton.click()

    }
    async getOrderIdOfProduct() {
        return (await this.orderIdLocator.textContent()).split(" ")[2]
    }

    async verifyOrderConfirmationMessage(message) {
        await expect(this.page.getByText(message)).toBeVisible()
    }


}
