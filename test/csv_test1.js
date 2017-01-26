module.exports = {
    'Advance Guardian CSV Test': function(browser) {
        var client = browser.page.csv()
        var personalDataList = client.getPersonalData('./data/csv_test1.csv')
        for (var index = 0; index < 50; index++) {

            var personalData = personalDataList[index + 1].toString().split(',')
            var nik = personalData[1]
            client.navigate()
            client.fillForm(browser, personalData)
            browser.pause(2000)
            browser.resizeWindow(1000, 500)
            browser.saveScreenshot('./screenshot/' + nik + '-application.png')
            client.click('@submitButton')
            browser.useXpath()
                //  Ensure the page has finished loading and take screenshot after
            client.waitForElementVisible('(//div[@class="report-content"])', 120000, 'Score Report (%s) Load Time: %d ms  for : ' + nik)
            client.waitForElementNotVisible('(//div[@class="el-loading-mask"])', 120000, ' Fully Page (%s) Loadtime : %d ms \n ------------------------------------------------- \n ')
            browser.pause(10000)
                .resizeWindow(1000, 500)
                .saveScreenshot('./screenshot/' + nik + '-fullreport.png')
        }
        browser.end()
    },
}

//   Wait for the full report to show and take screenshot

// client.waitForElementVisible('(//div[@class="report-content"])', 120000, ' is required to load the full report page for : ' + nik)
// client.waitForElementNotVisible('(//div[@class="el-loading-mask"])', 120000, ' is required to completely load the report content')
// console.log('------------------------------------------')
// browser.pause(3000)
// browser.resizeWindow(1000, 500)
// browser.saveScreenshot('./screenshot/' + nik + '-fullreport.png')