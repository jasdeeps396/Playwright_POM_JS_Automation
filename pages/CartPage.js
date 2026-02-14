
export class CartPage {

    constructor(page) {
        this.page = page;
        this.listCartItems = page.locator("li div div h3")
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' })


    }

    async verifyThatProductDisplayedInCartPage() {
        await this.listCartItems.first().waitFor()
        return await this.listCartItems.textContent()
    }
    // Proceed to checkout
    async clickOnCheckoutButton() {
        await this.checkoutButton.click()
    }

}