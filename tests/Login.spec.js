import { test, expect } from '@playwright/test'
import { App } from '../pages/App'

const userName = "jasdeeps426@yopmail.com";
const passsword = "Test@1234";


test('@login Login with Valid creds', async ({ page }) => {
    const app = new App(page)


})