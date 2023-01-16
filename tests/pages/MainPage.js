const Helper = require('../helper/Helper');
const ProductPage = require("./ProductPage");

const HOME_BUTTON = "class = 'nav-item active'";
const ABOUT_BUTTON = "//a[@data-target='#videoModal']";
const LOGIN_BUTTON = "[id = login2]"
const LOGGED_USER = "[id = nameofuser]"
const CART_BUTTON = "[id = cartur]"
class MainPage extends Helper {

    constructor(driver) {
        super(driver);
    }

    async clickHomeButton() {
        await this.clickElementByXpath(HOME_BUTTON);
    }

    async clickAboutButton() {
        await this.clickElementByXpath(ABOUT_BUTTON);
    }

    async clickLoginButton() {
        await this.clickElementByCss(LOGIN_BUTTON);
    }

    async clickCartButton() {
        await this.clickElementByCss(CART_BUTTON)
    }

    async getLoggedUsername() {
        return this.getTextFromElement(LOGGED_USER);
    }

    async productSelect(locator) {
        await this.clickElementByXpath(locator);
        return new ProductPage(this.driver)
    }

    async selectProductByName(text) {
        await this.refreshBrowser()
        return "//a[text() = '" + text + "']"
    }
}
module.exports = MainPage;
