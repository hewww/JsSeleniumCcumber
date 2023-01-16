const Helper = require('../helper/Helper');

const LOGIN_INPUT = "[id = loginusername]";
const PASSWORD_INPUT = "[id = 'loginpassword']";
const SUBMIT_BUTTON = "[onclick='logIn()']"


class LoginPage extends Helper {

    constructor(driver) {
        super(driver);
    }
    async typeLogin(login) {
        await this.inputText(LOGIN_INPUT,login)
        return this;
    };
    async typePassword(password) {
        await this.inputText(PASSWORD_INPUT,password);
        return this;
    };
    async clickSubmit() {
        await this.clickElementByCss(SUBMIT_BUTTON);
        return this;
    };
}
module.exports = LoginPage;
