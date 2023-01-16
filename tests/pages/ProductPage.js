const Helper = require("../helper/Helper");
const {until} = require("selenium-webdriver");
const timeouts = require("../constants");

const titleProduct = "h2.name";
const priceProduct = "h3.price-container";
const descProduct = "[id = more-information]";
const ADD_BUTTON = "[class = 'btn btn-success btn-lg']";


class ProductPage extends Helper {

    constructor(driver) {
        super(driver);
    }

    async clickAddButton() {
        await this.clickElementByCss(ADD_BUTTON);
        await this.driver.wait(until.alertIsPresent(), timeouts.STEP_TIMEOUTS.TIMEOUT);
    }
}
module.exports = ProductPage;
