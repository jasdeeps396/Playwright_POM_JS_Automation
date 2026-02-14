import { test, expect } from '@playwright/test'
import { App } from '../../pages/App'
import {users} from '../../test-data/users'

const products = require('../../test-data/productData.json');


 

const userName = users.validUser1.username;
const password = users.validUser1.password;
const productName = products.productName;
console.log(userName,"------",password,"---------",productName,"--------",products.cvv,"-------",products.fullName)
test.describe.configure({mode:'serial'})
{

test(' @webtest verify that user is able to place order successfully', async ({ page }) => {
    /** @type {App} */
    const app = new App(page)
    await app.loginPage.goto()
    await app.loginPage.validLogin(userName, password)
    await app.dashboardPage.verifyDashboardLoadedSuccessfully()
    await app.dashboardPage.clickOnAddToCartOfSpecificProduct(productName)
    await app.dashboardPage.verifyProductAddToCartMessage()
    await app.dashboardPage.clickOnHeaderButton('Cart')
    expect(await app.cartPage.verifyThatProductDisplayedInCartPage()).toContain(productName)
    await app.cartPage.clickOnCheckoutButton()
    await app.checkoutPage.verifyCheckoutPageLoadedSuccessfully()
    await app.checkoutPage.fillPaymentDetails(products.cvv,products.fullName)
    await app.checkoutPage.selectCountryCheckoutPage('ind', 'India')
    await app.checkoutPage.clickOnPlaceOrderButton()
    const orderId = await app.checkoutPage.getOrderIdOfProduct()
    console.log(`Order ID: ${orderId}`);
    await app.checkoutPage.verifyOrderConfirmationMessage('Thankyou for the order. ')
    await app.dashboardPage.clickOnHeaderButton('ORDERS')
    await app.orderPage.clickOnViewButtonWithOrderid(orderId)
    await app.orderPage.verifyOrderDetails(orderId)
})

test('verify that user is login', async ({ page }) => {
    /** @type {App} */
    const app = new App(page)
    await app.loginPage.goto()
    await app.loginPage.validLogin(userName, password)
    await app.dashboardPage.verifyDashboardLoadedSuccessfully()
})
test('verify that user is @login', async ({ page }) => {
    /** @type {App} */
    const app = new App(page)
    await app.loginPage.goto()
    await app.loginPage.validLogin(userName, password)
    await app.dashboardPage.verifyDashboardLoadedSuccessfully()
})
}



