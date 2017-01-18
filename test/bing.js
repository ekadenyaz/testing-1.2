module.exports = {
    'Advance Scoring System V1.2 Test': function(browser) {
        // browser
        //     .url('http://github.com/');
        // browser.resizeWindow(1000, 500)
        // browser.saveScreenshot('./screenshot/bing2.png');
        // browser.end()

        var client = browser.page.homePage
        client.navigate()
            .waitForElementVisible('@query')
            .waitForElementVisible()
            .setValue()
            .setValue()
            .expect.element().to.be.present
            .click()
            .waitForElementVisible()

        var i = 0

        function runTest() {
            var nikList = getNIK(filePath)
            client.waitForElementVisible()
                .expect.element().to.be.present
                .setValue()
                .click()
                .waitForElementVisible()
                .click()
                .getAttribute('', '', function(result) {
                    browser.url(result, function() {
                        browser.switchWindow(result.value[1]);
                        client.waitForElementNotVisible('.el-loading-mask', 120000)
                        client.click('')
                        browser.pause(1000)
                            .resizeWindow(1000, 500)
                            .saveScreenshot('./screenshot/' + nikList[i] + '.png')
                            .closeWindow()
                            .switchWindow(result.value[0])
                            .url('', function() {
                                i++
                                while (i < nikList.length) {
                                    runTest()
                                }
                            })
                    })
                })
        }
    },
};

var fs = require('fs')
var readline = require('readline')

function getNIK(filePath) {
    var array = fs.readFileSync(filePath).toString().split("\n");
    return array
}