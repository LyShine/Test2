var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


driver.get('http://www.baidu.com');
driver.findElement(By.id('kw')).sendKeys('selenium');
driver.findElement(By.id('su')).click();
driver.manage().window().maximize(); 


// 学会了基本的使用缺不能做扩展??? 为什么??


// driver.wait(until.titleIs('test_百度搜索'), 100000);
// driver.quit();
// driver.getTitle().then(b=>{console.log(b)});
// driver.findElement(By.id('1')).click()
