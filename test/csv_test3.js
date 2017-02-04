module.exports = {
    'Advance Guardian CSV UI Test': function (browser) {
        var client = browser.page.csv3()
        var personalDataList = client.getPersonalData('./data/csv_test3.csv')
        personalDataList.forEach((personalData) => {
            const nik = personalData.IDNumber
            console.log(nik)
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
        })
        browser.end()
    },
}