const Helper = require('../helper/Helper');
const consts = require('../constants');
const {By} = require("selenium-webdriver");
const {elementIsVisible} = require("selenium-webdriver/lib/until");
const chai = require('chai');
const expect = chai.expect;

const PURCHASE_BUTTON = "//button[text() = 'Purchase']";
const ORDER_BUTTON = "//button[text() = 'Place Order']";
const ORDER_NAME = "[id = 'name']";
const ORDER_COUNTRY = "[id = 'country']";
const ORDER_CITY = "[id = 'city']";
const ORDER_CARD = "[id = 'card']";
const ORDER_MONTH = "[id = 'month']";
const ORDER_YEAR = "[id = 'year']";
const OK_SIGN = "sweet-alert  showSweetAlert visible"

class CartPage extends Helper {

    constructor(driver) {
        super(driver);
    }

    async assertVisibleConfirm() {

        let cos = this.driver.findElement(By.className(OK_SIGN))
        await cos.getText().then(function (text) {
            expect(text).contains("Thank you for your purchase!")
        })
        }

    async assertNotVisibleConfirm() {
        let cos = this.driver.findElement(By.className(OK_SIGN))
        await cos.getText().then(function (text) {
            expect(text).not.contains("Thank you for your purchase!")
        })
    }

    async clickOrderButton() {
        await this.clickElementByXpath(ORDER_BUTTON);
    }

    async clickPurchaseButton() {
        await this.clickElementByXpath(PURCHASE_BUTTON);
    }

    async inputName() {
        await this.inputText(ORDER_NAME,consts.USER_CREDITS.NAME);
    }

    async inputCountry() {
        await this.inputText(ORDER_COUNTRY,consts.USER_CREDITS.COUNTRY);
    }

    async inputCity() {
        await this.inputText(ORDER_CITY,consts.USER_CREDITS.CITY);
    }

    async inputCard() {
        await this.inputText(ORDER_CARD,consts.USER_CREDITS.CARD);
    }

    async inputMonth() {
        await this.inputText(ORDER_MONTH,consts.USER_CREDITS.MONTH);
    }

    async inputYear() {
        await this.inputText(ORDER_YEAR,consts.USER_CREDITS.YEAR);
    }

    async inputOrderPersonalData() {
        await this.inputName();
        await this.inputCountry();
        await this.inputCity();
        await this.inputCard();
        await this.inputMonth();
        await this.inputYear();
        return this;
    }

    async inputOrderPersonalDataWithWrongYear() {
        await this.inputName();
        await this.inputCountry();
        await this.inputCity();
        await this.inputCard();
        await this.inputMonth();
        await this.inputText(ORDER_YEAR,"ABCD")
        return this;
    }
}
module.exports = CartPage;
