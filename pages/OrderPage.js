import { expect } from "@playwright/test";

export class OrderPage {
    constructor(page) {
        this.page = page
        this.orderList = page.locator('.table tbody tr');
        this.orderSummeryMessage = page.locator('text= order summary ')
        this.orderIdFromOrderSummaryPage = page.locator('.col-md-6 .col-text');
    }

    async clickOnViewButtonWithOrderid(orderId) {
        const filteredRow = this.orderList.filter({ has: this.page.locator('th', { hasText: orderId }) }).first();
        await filteredRow.getByRole('button', { name: 'View' }).click();
    }

    async verifyOrderDetails(orderId) {
        await this.orderSummeryMessage.waitFor()
        await expect(this.orderSummeryMessage).toBeVisible();
        console.log('✅ Order Summary page is visible.');
        expect(await this.orderIdFromOrderSummaryPage.textContent()).toBe(orderId)
        expect(await this.orderIdFromOrderSummaryPage.isVisible()).toBeTruthy()
        console.log('✅ Order IDs match successfully.');


    }

}