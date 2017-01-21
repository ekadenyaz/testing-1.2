var fs = require('fs')
var readline = require('readline')

var csvCommands = {
    fillForm: function(browser, personData) {
        //        var personData = personDataList.toString().split('\t')
        var name = personData[0] //.toUpperCase()
        var pob = personData[2] //.toUpperCase()
        var nik = personData[3]
        var mobile = personData[4]
        var education = personData[5]
        var maritalStatus = personData[6]
        var dependencies = personData[7]
        var zip = personData[8]
        var areaCode = '+62'
        var province = personData[9]
        var city = personData[10] //.toUpperCase()
        var region = personData[11] //.toUpperCase()
        var kelurahan = personData[12] //.toUpperCase()

        var employmentStatus = personData[13]
        var employerName = personData[14] //.toUpperCase()
        var jobIndustry = personData[15] //.toUpperCase()
        var jobPosition = personData[16]
        var jobType = personData[17] //.toUpperCase()
        var monthlyIncome = personData[19]
        var companyAreaCode = '+62'
        var companyLandline = personData[20]
        var companyZip = personData[21]
        var workSinceDate = new Date('2014-03-30')
        var companyAddress = personData[22] //.toUpperCase()

        var homeStatus = personData[23]
        var monthlyRental = personData[24]
        var residentialPhone = personData[25]
        var residentialAreaCode = '+62'
        var residentialZip = personData[26]
        var residentialAddress = personData[27] //.toUpperCase()

        this.waitForElementVisible('@nameField', 120000)
            //            .click('@closeButton')
        this.clearValue('@nameField')
            .setValue('@nameField', name)
            .clearValue('@pobField')
            .setValue('@pobField', pob)
            .clearValue('@nikField')
            .setValue('@nikField', nik)
            .clearValue('@zipField')
            .setValue('@zipField', zip)
            .click('@areaCodeField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + areaCode + '"]')
            .clearValue('@mobileField')
            .clearValue('@mobileField')
            .setValue('@mobileField', mobile)
            .click('@provinceField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + province + '"]')
            .click('@educationField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + education + '"]')
            .click('@cityField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()[contains(.,"' + city + '")]]')
            .click('@maritalStatusField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + maritalStatus + '"]')
            .click('@regionField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + region + '"]')
            .click('@dependentsField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + dependencies + '"]')
            .click('@kelurahanField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + kelurahan + '"]')
            .click('@employmentStatusField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + employmentStatus + '"]')
            .clearValue('@employerNameField')
            .setValue('@employerNameField', employerName)
            .clearValue('@jobIndustryField')
            .setValue('@jobIndustryField', jobIndustry)
            .clearValue('@monthlyIncomeField')
            .setValue('@monthlyIncomeField', monthlyIncome)
            .click('@jobPositionField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + jobPosition + '"]')
            .click('@companyAreaCodeField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + companyAreaCode + '"]')
            .clearValue('@companyLandlineField')
            .setValue('@companyLandlineField', companyLandline)
            .click('@jobTypeField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + jobType + '"]')
            .clearValue('@companyZipField')
            .setValue('@companyZipField', companyZip)
            .clearValue('@workSinceDateField')
            .click('@workSinceDateField')
            .dropDownPause(browser, 2000)
            //        this.click('/html/body/div[2]/div[1]/div/div[2]/table[1]/tbody/tr[2]/td[7]')
        this.setValue('@workSinceDateField', workSinceDate)
            .clearValue('@companyAddressField')
            .setValue('@companyAddressField', companyAddress)
            .click('@homeStatusField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + homeStatus + '"]')
            .clearValue('@monthlyRentalField')
            .setValue('@monthlyRentalField', monthlyRental)
            .clearValue('@residentialZipField')
            .setValue('@residentialZipField', residentialZip)
            .click('@residentialAreaCodeField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + residentialAreaCode + '"]')
            .click('@residentialPhoneField')
            .clearValue('@residentialPhoneField')
            .setValue('@residentialPhoneField', residentialPhone)
            .clearValue('@residentialAddressField')
            .setValue('@residentialAddressField', residentialAddress)
            .waitForElementVisible('@submitButton', 2000)
    },
    dropDownPause: function(browser, time) {
        browser.pause(time)
    },
    getPersonalData: function(filePath) {
        var array = fs.readFileSync(filePath).toString().split("\n")
        return array
    }

}

module.exports = {
    commands: [csvCommands],
    url: 'http://192.168.40.7:8080/application',
    elements: {
        closeButton: {
            selector: '//i[@class="el-dialog__close el-icon el-icon-close"]',
            locateStrategy: 'xpath'
        },
        uploadButton: {
            selector: '//*[@id="upload"]',
            locateStrategy: 'xpath'
        },
        //Identity Part
        nameField: {
            selector: '(//input[@type="text"])[position()=1]',
            locateStrategy: 'xpath'
        },
        pobField: {
            selector: '(//input[@type="text"])[position()=2]',
            locateStrategy: 'xpath'
        },
        nikField: {
            selector: '(//input[@type="text"])[position()=3]',
            locateStrategy: 'xpath'
        },
        zipField: {
            selector: '(//input[@type="text"])[position()=4]',
            locateStrategy: 'xpath'
        },
        areaCodeField: {
            selector: '(//input[@type="text"])[position()=5]',
            locateStrategy: 'xpath'
        },
        mobileField: {
            selector: '(//input[@type="text"])[position()=6]',
            locateStrategy: 'xpath'
        },
        provinceField: {
            selector: '(//input[@type="text"])[position()=7]',
            locateStrategy: 'xpath'
        },
        educationField: {
            selector: '(//input[@type="text"])[position()=8]',
            locateStrategy: 'xpath'
        },
        cityField: {
            selector: '(//input[@type="text"])[position()=9]',
            locateStrategy: 'xpath'
        },
        maritalStatusField: {
            selector: '(//input[@type="text"])[position()=10]',
            locateStrategy: 'xpath'
        },
        regionField: {
            selector: '(//input[@type="text"])[position()=11]',
            locateStrategy: 'xpath'
        },
        dependentsField: {
            selector: '(//input[@type="text"])[position()=12]',
            locateStrategy: 'xpath'
        },
        kelurahanField: {
            selector: '(//input[@type="text"])[position()=13]',
            locateStrategy: 'xpath'
        },

        //Employment Part
        employmentStatusField: {
            selector: '(//input[@type="text"])[position()=14]',
            locateStrategy: 'xpath'
        },
        employerNameField: {
            selector: '(//input[@type="text"])[position()=15]',
            locateStrategy: 'xpath'
        },
        jobIndustryField: {
            selector: '(//input[@type="text"])[position()=16]',
            locateStrategy: 'xpath'
        },
        monthlyIncomeField: {
            selector: '(//input[@type="text"])[position()=17]',
            locateStrategy: 'xpath'
        },
        jobPositionField: {
            selector: '(//input[@type="text"])[position()=18]',
            locateStrategy: 'xpath'
        },
        companyAreaCodeField: {
            selector: '(//input[@type="text"])[position()=19]',
            locateStrategy: 'xpath'
        },
        companyLandlineField: {
            selector: '(//input[@type="text"])[position()=20]',
            locateStrategy: 'xpath'
        },
        jobTypeField: {
            selector: '(//input[@type="text"])[position()=21]',
            locateStrategy: 'xpath'
        },
        companyZipField: {
            selector: '(//input[@type="text"])[position()=22]',
            locateStrategy: 'xpath'
        },
        workSinceDateField: {
            selector: '(//input[@type="text"])[position()=23]',
            locateStrategy: 'xpath'
        },
        companyAddressField: {
            selector: '(//input[@type="text"])[position()=24]',
            locateStrategy: 'xpath'
        },

        //Residential Part
        homeStatusField: {
            selector: '(//input[@type="text"])[position()=25]',
            locateStrategy: 'xpath'
        },
        monthlyRentalField: {
            selector: '(//input[@type="text"])[position()=26]',
            locateStrategy: 'xpath'
        },
        residentialZipField: {
            selector: '(//input[@type="text"])[position()=27]',
            locateStrategy: 'xpath'
        },
        residentialAreaCodeField: {
            selector: '(//input[@type="text"])[position()=28]',
            locateStrategy: 'xpath'
        },
        residentialPhoneField: {
            selector: '(//input[@type="text"])[position()=29]',
            locateStrategy: 'xpath'
        },
        residentialAddressField: {
            selector: '(//input[@type="text"])[position()=30]',
            locateStrategy: 'xpath'
        },
        submitButton: {
            selector: '//*[@id="submit"]',
            locateStrategy: 'xpath'
        },
    },

}