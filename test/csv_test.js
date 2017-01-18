module.exports = {
    'Advance Guardian CSV Test': function(browser) {
        // browser
        //     .url('http://github.com/');
        // browser.resizeWindow(1000, 500)
        // browser.saveScreenshot('./screenshot/bing2.png');
        // browser.end()

        var client = browser.page.csv()
        client.navigate()
        browser.pause(5000)
            //Ensure the page has finished loading
        client.waitForElementVisible('@uploadButton', 120000)
            //Fill the client information and click submit
            .setValue('@nameField', 'Eko Patrio')
            .setValue('@pobField', 'Balikpapan')
            .setValue('@nikField', '3216198506760001')
            .setValue('@zipField', '73011')
            .click('@areaCodeField')
            .click('@selectAreaCode')
            .setValue('@mobileField', '8124312493')
            .click('@provinceField')
            .click('@selectProvince')
            .click('@educationField')
            .click('@selectEducation')
            .click('@cityField')
            .click('@selectCity')
            .click('@maritalStatusField')
            .click('@selectMaritalStatus')
            .click('@regionField')
            .click('@selectRegion')
            .click('@dependentsField')
            .click('@selectDependents')
            .click('@kelurahanField')
            .click('@selectKelurahan')

        .click('@employmentStatusField')
            .click('@selectEmploymentStatus')
            .setValue('@employerNameField', 'PT. Wijaya Karya')
            .setValue('@jobIndustryField', 'IT Stuff')
            .setValue('@monthlyIncomeField', '20000000')
            .click('@jobPositionField')
            .click('@selectJobPosition')
            .setValue('@companyLandlineField', '6602899')
            .click('@jobTypeField')
            .click('@selectJobType')
            .setValue('@companyZipField', '73011')
            .click('@workSinceDateField')
            .click('@selectWorkSinceDate')
            .setValue('@companyAddressField', 'Jalan Abc, akjasd')

        .click('@homeStatusField')
            .click('@selectHomeStatus')
            .setValue('@monthlyRentalField', '2000000')
            .setValue('@residentialZipField', '73011')
            .setValue('@residentialPhoneField', '6602899')
            .setValue('@residentialAddressField', 'Jalan Abc, akjasd')

        client.expect.element('@submitButton').to.be.present
            //Take Screenshot here just to make sure that data filled in is correct
        browser.pause(1000)
            .resizeWindow(1000, 500)
            .saveScreenshot('./screenshot/test.png')
        client.click('@submitButton')

        // Wait for the full report to show and take screenshot
        client.waitForElementVisible()
        client.getAttribute('', '', function(result) {
            browser.url(result, function() {
                browser.switchWindow(result.value[1]);
                client.waitForElementNotVisible('', 120000) // Ensure the page has finished loading and take screenshot after
                browser.pause(1000)
                    .resizeWindow(1000, 500)
                    .saveScreenshot('./screenshot/test.png')
                    .closeWindow()
                    .switchWindow(result.value[0])

            })
        })
        client.end()

    },
};