const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('safari').build();
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('daniel picou art', Key.RETURN);
        let firstResult = await driver.wait(until.elementLocated(By.css('h3>a')),10000);
        console.log(await firstResult.click());
    } finally {
        await driver.quit();
    }
})();
