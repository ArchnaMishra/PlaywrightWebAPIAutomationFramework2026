import {test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import {HomePage} from "../../src/pages/HomePage";

let loginPage :LoginPage;
let homePage : HomePage;

test.beforeEach(async ({page}) => {
    loginPage=new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin("testuser2025@gmail.com","Test@12345");
    homePage=new HomePage(page);
})


test("Home page title test", async({page}) => {
   let homePageTitle= await homePage.getHomePageTitle();
   console.log(`HomePage title is ${homePageTitle}`);
   expect(homePageTitle).toBe("My Account");
})

test("Logout link exist", async({page}) => {
    expect(homePage.isLogoutLinkExist).toBeTruthy();
})

test("Homepage headers exist test",async ({page}) => {
    let homePageHeaders = await homePage.getHomePageHeaders();
    console.log("Home page headers are :", homePageHeaders);
    expect.soft(homePageHeaders).toHaveLength(4);
    expect.soft(homePageHeaders).toEqual(["My Account","My Orders","My Affiliate Account","Newsletter"]);
})