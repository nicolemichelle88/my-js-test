const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.RETURN);
        let firstResult = await driver.wait(until.elementLocated(By.css('h3>a')),10000);
        console.log(await firstResult.getText());
    } finally {
        await driver.quit();
    }
})();
