module.exports = {
    'Advance Guardian CSV Test': function(browser) {
        var client = browser.page.csv2()
        var index = 225
            //Clear all the Field and then Fill the client information and click submit\
        var personalDataList = client.getPersonalData('./test/csv_test2.csv')
        var personalData = personalDataList[index].toString().split(',')
        var nik = personalData[9]
        client.navigate()
        browser.maximizeWindow()
        client.fillForm(browser, personalData)
        browser.pause(2000)
        browser.resizeWindow(1000, 500)
        browser.saveScreenshot('./screenshot/' + nik + '-application.png')
        client.click('@submitButton')
        browser.useXpath()
            //  Ensure the page has finished loading and take screenshot after
        browser.maximizeWindow()
        client.waitForElementVisible('(//div[@class="report-content"])', 120000, '(%s) Load Time: %d ms  NIK : ' + nik)
        client.waitForElementNotVisible('(//div[@class="el-loading-mask"])', 120000, '(%s) Fully Load the page: %d')
        browser.pause(10000)
        browser.resizeWindow(1000, 500)
        browser.saveScreenshot('./screenshot/' + nik + '-fullreport.png')
        browser.end()
    },
}


//     client.click('@submitButton')
// browser.useXpath()
// client.waitForElementVisible('(//div[@class="report-content"])', 120000)
// client.waitForElementNotVisible('(//div[@class="el-loading-mask"])', 120000)
// browser.pause(3000)
// browser.resizeWindow(1000, 500)
// browser.saveScreenshot('./screenshot/' + nik + '-fullreport.png')
// browser.end()