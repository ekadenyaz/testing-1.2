module.exports = {
    'Advance Guardian CSV Test': function(browser) {
        var client = browser.page.csv()
        var nik = ''
            //Clear all the Field and then Fill the client information and click submit\
        var personalDataList = client.getPersonalData('./test/csv.txt')
        for (var index = 0; index < personalDataList.length; index++) {
            var personalData = personalDataList[index].toString().split('\t')
            nik = personalData[3]
            if (nik == " " || nik == null) {
                break
            }
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
                client.waitForElementVisible('(//div[@class="report-content"])', 120000, ' %d is required to load the full report page (%s) for : ' + nik)
                client.waitForElementNotVisible('(//div[@class="el-loading-mask"])', 120000, ' %d is required to completely load the report content (%s)')
                browser.pause(1000)
                    .resizeWindow(1000, 500)
                    .saveScreenshot('./screenshot/' + nik + '-fullreport.png')
                    .closeWindow()
                    .switchWindow(result.value[0])
            })
        }
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