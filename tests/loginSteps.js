const { Given, When, Then} = require('cucumber');
const assert = require('chai').assert;
const And = Then;
const chai = require('chai');
const expect = chai.expect;
const envVal = require('./constants');
const CartPage = require('./pages/CartPage');
const MainPage = require('./pages/MainPage');
const LoginPage = require('./pages/LoginPage');
const {Builder} = require("selenium-webdriver");
const generator = require('cucumber-html-reporter');

Given('I open main Page', async function() {
    this.driver = await new Builder().forBrowser('chrome').build();
    await this.driver.manage().setTimeouts({implicit: 5000});
    await this.driver.manage().window().maximize();
    await this.driver.get("https://www.demoblaze.com/");

}, envVal.STEP_TIMEOUTS.TIMEOUT );

And('I login to site with proper credits', async function() {
    await new MainPage(this.driver)
        .clickLoginButton();

    await (await (await new LoginPage(this.driver)
        .typeLogin(envVal.USER_CREDITS.LOGIN))
        .typePassword(envVal.USER_CREDITS.PASSWORD))
        .clickSubmit();
},envVal.STEP_TIMEOUTS.TIMEOUT);


And('Select product name: {string}', async function(productName) {

    let mainPage =  new MainPage(this.driver);
    let input = mainPage.selectProductByName(productName);
    await (await mainPage.productSelect(input))
        .clickAddButton();
    await this.driver.switchTo().alert().accept();
}, envVal.STEP_TIMEOUTS.TIMEOUT);

And('I open cart and try to place order', async function() {
    let mainPage =  new MainPage(this.driver)
    await mainPage.clickCartButton()

    let cartPage = new CartPage(this.driver)
    await cartPage.clickOrderButton()
},envVal.STEP_TIMEOUTS.TIMEOUT);

And('I input test data and click purchase button',async function() {
    let cartPage = new CartPage(this.driver);
    await (await cartPage.inputOrderPersonalData())
        .clickPurchaseButton()
})

And('I Input test data with characters in Year input', async function() {
    let cartPage = await (await new CartPage(this.driver)
        .inputOrderPersonalDataWithWrongYear())
        .clickPurchaseButton();
})

Then('I should not see OK sign', async function() {
    const cartPage = new CartPage(this.driver);
    await cartPage.assertNotVisibleConfirm();
})

Then('I should see OK sign', async function() {
    const cartPage = new CartPage(this.driver);
    await cartPage.assertVisibleConfirm();
})
