export class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.getByPlaceholder("email@example.com")
        this.password = page.getByPlaceholder("enter your passsword")
        this.LoginBtn = page.getByRole("button", { name: 'Login' })
    }
    async goto() {
        await this.page.goto("/client")
    }

    async validLogin(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.LoginBtn.click()
    }



}
