const {until, By} = require("selenium-webdriver");
class Helper {

    constructor(driver) {
        this.driver = driver;
    };

    async refreshBrowser() {
        await this.driver.navigate().refresh();
    }

    async clickElementByCss(id) {
        await this.driver.findElement(By.css(id)).click();
    };

    async clickElementByXpath(xpath) {
        await this.driver.findElement(By.xpath(xpath)).click();
    };

    async inputText(selector, text) {
        let inputBox = this.driver.findElement(By.css(selector));
        await this.driver.wait(until.elementLocated(By.css(selector)));
        inputBox.sendKeys(text);
    };

    async getTextFromElement(element) {
        return await this.driver.findElement(By.css(element)).getText()
    }
}
module.exports = Helper;
