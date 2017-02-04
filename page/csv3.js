const fs = require('fs')
const readline = require('readline')
const parse = require('csv-parse/lib/sync')
const util = require('../util/util.js')

const csvCommands = {
    fillForm: function (browser, personData) {
        const employmentStatusArray = ['FULL TIME', 'PART TIME']
        const name = personData.FullName //.toUpperCase()
        const pob = personData.BirthPlace //.toUpperCase()
        const nik = personData.IDNumber
        const areaCode = '+62'
        const mobile = personData.MobilePhone
        const education = util.getEducation(personData.Education)
        const maritalStatus = util.getMaritalStatus(personData.MaritalStatus)
        const dependencies = personData.NumOfDependence
        const zip = personData.LegalZipCode
        const province = personData.LegalProvince
        const city = personData.LegalCity
        const region = personData.LegalKecamatan
        const kelurahan = personData.LegalKelurahan

        const employmentStatus = employmentStatusArray[Math.floor(Math.random() * employmentStatusArray.length)]
        const employerName = personData.CompanyName
        const jobIndustry = util.getJobIndustries(personData.IndustryTypeID)
        const jobPosition = util.getJobPosition(personData.JobPos)
        const jobType = util.getJobTypes(personData.JobTypeID)
        const monthlyIncome = personData.MonthlyFixedIncome
        const companyAreaCode = '+62'
        const companyLandline = personData.CompanyPhone1
        const companyZip = personData.CompanyZipCode
        const workSinceDate = personData.EmploymentSinceYear
        const companyAddress = personData.CompanyAddress
        const homeStatus = util.getHomeStatus(personData.HomeStatus)
        const monthlyRental = personData.HomePrice
        const residentialPhone = personData.ResidencePhone1
        const residentialAreaCode = '+62'
        const residentialZip = personData.ResidenceZipCode
        const residentialAddress = personData.ResidenceAddress

        this.waitForElementVisible('@nameField', 120000)
        this.clearValue('@nameField')
            .setValue('@nameField', name)
            .clearValue('@pobField')
            .setValue('@pobField', pob)
            .clearValue('@nikField')
            .setValue('@nikField', nik)
            .clearValue('@zipField')
            .setValue('@zipField', zip)
            .click('@areaCodeField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + areaCode + '"]')
            .clearValue('@mobileField')
            .clearValue('@mobileField')
            .setValue('@mobileField', mobile)
            .click('@provinceField')
        util.dropDownPause(browser, 2000)
        this.click('//span[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "' + province.toLowerCase() + '")]')
            .click('@educationField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + education + '"]')
            .click('@cityField')
        util.dropDownPause(browser, 2000)
        this.click('//span[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "' + city.toLowerCase() + '")]')
            .click('@maritalStatusField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + maritalStatus + '"]')
            .click('@regionField')
        util.dropDownPause(browser, 2000)
        this.click('//span[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "' + region.toLowerCase() + '")]')
            .click('@dependentsField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + dependencies + '"]')
            .click('@kelurahanField')
        util.dropDownPause(browser, 1000)
        this.click('//span[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "' + kelurahan.toLowerCase() + '")]')
            .click('@employmentStatusField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + employmentStatus + '"]')
            .clearValue('@employerNameField')
            .setValue('@employerNameField', employerName)
            .clearValue('@jobIndustryField')
            .click('@jobIndustryField')
            .setValue('@jobIndustryField', jobIndustry)
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + jobIndustry + '"]')
            .clearValue('@monthlyIncomeField')
            .setValue('@monthlyIncomeField', monthlyIncome)
            .click('@jobPositionField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + jobPosition + '"]')
            .click('@companyAreaCodeField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + companyAreaCode + '"]')
            .clearValue('@companyLandlineField')
            .setValue('@companyLandlineField', companyLandline)
            .click('@jobTypeField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + jobType + '"]')
            .clearValue('@companyZipField')
            .setValue('@companyZipField', companyZip)
            .clearValue('@workSinceDateField')
            .click('@workSinceDateField')
        util.dropDownPause(browser, 2000)
        this.setValue('@workSinceDateField', workSinceDate)
            .clearValue('@companyAddressField')
            .setValue('@companyAddressField', companyAddress)
            .click('@homeStatusField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + homeStatus + '"]')
            .clearValue('@monthlyRentalField')
            .setValue('@monthlyRentalField', monthlyRental)
            .clearValue('@residentialZipField')
            .setValue('@residentialZipField', residentialZip)
            .click('@residentialAreaCodeField')
        util.dropDownPause(browser, 1000)
        this.click('//span[text()="' + residentialAreaCode + '"]')
            .click('@residentialPhoneField')
            .clearValue('@residentialPhoneField')
            .setValue('@residentialPhoneField', residentialPhone)
            .clearValue('@residentialAddressField')
            .setValue('@residentialAddressField', residentialAddress)
            .waitForElementVisible('@submitButton', 2000)
    },
    getPersonalData: function (filePath) {
        const textString = fs.readFileSync(filePath).toString().split('/n')
        const data = parse(textString, { columns: true })
        return data
    },
}

//Element Selector Definition
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