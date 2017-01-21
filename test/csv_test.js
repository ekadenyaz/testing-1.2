module.exports = {
    'Advance Guardian CSV Test': function(browser) {
        var client = browser.page.csv()
        var nik = '3301215305640000'
        var personalDataList = client.getPersonalData('./test/csv.txt')
        for (var index = 0; index < personalDataList.length; index++) {
            personalData = personalDataList[index].toString().split('\t')
            if (personalData[3] === nik) {
                client.navigate()
                client.fillForm(browser, personalData)
                browser.pause(2000)
                browser.resizeWindow(1000, 500)
                browser.saveScreenshot('./screenshot/' + nik + '-application.png')
                client.click('@submitButton')
                browser.useXpath()
                browser.window_handles(function(result) {
                    browser.switchWindow(result.value[1])
                        //  Ensure the page has finished loading and take screenshot after
                    client.waitForElementVisible('(//div[@class="report-content"])', 120000, ' %d is required to load the full report page for : ' + nik)
                    client.waitForElementNotVisible('(//div[@class="el-loading-mask"])', 120000, ' %d is required to completely load the report content')
                    browser.pause(1000)
                        .resizeWindow(1000, 500)
                        .saveScreenshot('./screenshot/' + nik + '-fullreport.png')
                        .closeWindow()
                        .switchWindow(result.value[0])
                })

                browser.end()
            }
        }
    },
}

//   Wait for the full report to show and take screenshot

// client.waitForElementVisible('(//div[@class="report-content"])', 120000, ' is required to load the full report page for : ' + nik)
// client.waitForElementNotVisible('(//div[@class="el-loading-mask"])', 120000, ' is required to completely load the report content')
// console.log('------------------------------------------')
// browser.pause(3000)
// browser.resizeWindow(1000, 500)
// browser.saveScreenshot('./screenshot/' + nik + '-fullreport.png')