var fs = require('fs')
var readline = require('readline')

var csvCommands = {
    fillForm: function(browser, personData) {
        //        var personData = personDataList.toString().split('\t')
        var employmentStatusArray = ['FULL TIME', 'PART TIME']
            // var jobIndustryArray = ['Others']
        var jobPositionArray = ['Manager', 'Supervisor', 'Director', 'Staff']
        var name = personData[0] //.toUpperCase()
        var pob = personData[3] //.toUpperCase()
        var nik = personData[1]
        var mobile = personData[5]
        var education = personData[8]
        var maritalStatus = personData[6]
        var dependencies = personData[7]
        var zip = personData[21]
        var areaCode = '+62'
        var province = personData[20]
        var city = personData[19].toLowerCase()
        var region = personData[18].toLowerCase()
        var kelurahan = personData[17].toLowerCase()

        var employmentStatus = employmentStatusArray[Math.floor(Math.random() * employmentStatusArray.length)]
        var employerName = personData[35]
        var jobIndustry = 'Others'
        var jobPosition = personData[34]
        var jobTypeCode = personData[33]
        var jobType = this.getJobType(jobTypeCode)
        var monthlyIncome = personData[47]
        var companyAreaCode = '+62'
        var companyLandline = personData[44] + personData[45]
        var companyZip = personData[43]
        var workSinceDate = new Date('2014-03-30')
        var companyAddress = personData[37]

        var homeStatus = personData[9]
        var monthlyRental = personData[11]
        var residentialPhone = personData[31] + personData[32]
        var residentialAreaCode = '+62'
        var residentialZip = personData[30]
        var residentialAddress = personData[14] //.toUpperCase()

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
        this.click('//span[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "' + city + '")]')
            .click('@maritalStatusField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + maritalStatus + '"]')
            .click('@regionField')
            .dropDownPause(browser, 1000)
        this.click('//span[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "' + region + '")]')
            .click('@dependentsField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + dependencies + '"]')
            .click('@kelurahanField')
            .dropDownPause(browser, 1000)
        this.click('//span[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "' + kelurahan + '")]')
            .click('@employmentStatusField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + employmentStatus + '"]')
            .clearValue('@employerNameField')
            .setValue('@employerNameField', employerName)
            .clearValue('@jobIndustryField')
            .click('@jobIndustryField')
            .setValue('@jobIndustryField', jobIndustry)
            .dropDownPause(browser, 5000)
        this.click('//span[text()="' + jobIndustry + '"]')
            .clearValue('@monthlyIncomeField')
            .setValue('@monthlyIncomeField', monthlyIncome)
            .click('@jobPositionField')
            .dropDownPause(browser, 2000)
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
    },
    getJobType: function(jobTypeCode) {
        switch (jobTypeCode) {
            case '141':
                return 'Entrepreneur'
            case '991':
                return 'Others'
            case '8':
                return 'Marketing'
        }
    }

}

module.exports = {
    commands: [csvCommands],
    url: 'http://dev-fe.advance.ai/application',
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