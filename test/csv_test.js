module.exports = {
    'Advance Guardian CSV Test': function(browser) {
        var client = browser.page.csv_csv()
        var personalDataList = client.getPersonalData('./test/csv.csv')
        for (var index = 0; index < 2; index++) {

            var personalData = personalDataList[index + 4].toString().split(',')
            var nik = personalData[9]
            client.navigate()
            client.fillForm(browser, personalData)
            browser.pause(2000)
            browser.resizeWindow(1000, 500)
            browser.saveScreenshot('./screenshot/' + nik + '-application.png')
            client.click('@submitButton')
            browser.useXpath()
                //  Ensure the page has finished loading and take screenshot after
            browser.waitForElementVisible('(//div[@class="report-content"])', 120000, 'Score Report (%s) Load Time: %d ms  for : ' + nik)
            browser.waitForElementNotVisible('(//div[@class="el-loading-mask"])', 120000, ' Fully Page (%s) Loadtime : %d ms')
            browser.pause(3000)
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