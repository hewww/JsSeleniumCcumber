const fs = require('fs');
const CONSTANTS = require('./constants');
const { Before, After, setDefaultTimeout, Status } = require('cucumber');
const webdriver = require('selenium-webdriver');

const RESULTS_FOLDER_PATH = './tests/results';
createTestResultFolderIfNeeded();

function createTestResultFolderIfNeeded() {
    if (!fs.existsSync(RESULTS_FOLDER_PATH)) {
        fs.mkdirSync(RESULTS_FOLDER_PATH);
    }
}

After(function () {
    this.driver.quit()
})



