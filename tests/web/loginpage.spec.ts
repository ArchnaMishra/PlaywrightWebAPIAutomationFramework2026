import test, { expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { HomePage } from "../../src/pages/HomePage";

let loginPage : LoginPage;
let homePage : HomePage;

test.beforeEach(async ({page}) =>{
     loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    homePage = new HomePage(page);
})

test("Login page title test", async () => {
    let pageTitle = await loginPage.getLoginPageTitle();
    console.log(`Login page title is : ${pageTitle}`);
    expect(pageTitle).toBe("Account Login");
})

test("Forgot Password link exists test", async () => {
    let isForgotPageLinkExist = await loginPage.isForgotPasswordLinkExist();
    console.log(`Forgot Password link exists: ${isForgotPageLinkExist}`);
    expect(isForgotPageLinkExist).toBeTruthy();
})

test("User is able to login test", async () => {
    await loginPage.doLogin("testuser2025@gmail.com","Test@12345");
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe("My Account");
})