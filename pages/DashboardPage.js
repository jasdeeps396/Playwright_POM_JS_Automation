import { expect } from "@playwright/test";

export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.card-body');
        this.productAddedToCartMessage = page.locator("text='Product Added To Cart'")
        this.headerButton = page.getByRole('listitem')
    }


    async waitForProducts() {
        await this.products.last().waitFor()
    }

    async verifyDashboardLoadedSuccessfully() {
        await expect(this.products.last()).toBeVisible()
    }

    async clickOnAddToCartOfSpecificProduct(productName) {
        await this.products.filter({ hasText: productName }).getByRole('button', { name: ' Add To Cart' }).click()
    }
    async verifyProductAddToCartMessage() {
        await this.productAddedToCartMessage.waitFor()
        await expect(this.productAddedToCartMessage).toBeVisible()
        await this.productAddedToCartMessage.waitFor({state:'hidden'})
    }
    async clickOnHeaderButton(headerButtonName) {
        await this.headerButton.getByRole('button', { name: headerButtonName }).click();
    }


}