import { LoginPage } from "./LoginPage"
import { DashboardPage } from './DashboardPage'
import { CartPage } from './CartPage'
import { OrderPage } from './OrderPage'
import { CheckoutPage } from './CheckoutPage'
 
export class App
{
constructor(page)
{   this.page=page
    this.loginPage =new LoginPage(page)
    this.dashboardPage=new DashboardPage(page)
    this.cartPage=new CartPage(page)
    this.orderPage=new OrderPage(page)
    this.checkoutPage=new CheckoutPage(page)
}
}

