var fs = require('fs')
var readline = require('readline')
var parse = require('csv-parse')

function getNIK(filePath, line) {
    var array = fs.readFileSync(filePath).toString().split("\n")
    return array[line + 1]
}
var line = getNIK('./test/csv.txt', 2).toString().split("\t")
console.log(line)
    /*
    module.exports = {
        'Advance Guardian CSV Test': function(browser) {
            browser.url('http://192.168.50.91:8080/application')
                //Ensure the page has finished loading
            browser.waitForElementVisible('i[class="el-dialog__close el-icon el-icon-close"]', 120000)
            browser.click('i[class="el-dialog__close el-icon el-icon-close"]')
            browser.useXpath()
            browser.pause(1000)
            browser.clearValue('(//input[@type="' + text + '"])[position()=1]')
            browser.setValue('(//input[@type="' + text + '"])[position()=1]', 'SANDY')
            browser.click('(//input[@type="text"])[position()=7]')
            browser.pause(1000)
            browser.click('(//span[text()="Maluku"])')
            browser.end()
        }
    }
    */




// var name = 'SANDY'
// var pob = 'JAKARTA'
// var nik = '6472062810780004'
// var zip = '13701'
// var areaCode = '+62'
// var mobile = '334455667'
// var province = 'Maluku'
// var education = 'DOCTOR DEGREE'
// var city = 'Kota, Ambon'
// var maritalStatus = 'SINGLE'
// var region = 'Baguala'
// var dependencies = '5'
// var kelurahan = 'Halong'

// var employmentStatus = 'FULL TIME'
// var employerName = 'PT.Metal Indo'
// var jobIndustry = 'WSST'
// var monthlyIncome = '2000000'
// var jobPosition = 'Director'
// var companyAreaCode = '+62'
// var companyLandline = '334455667'
// var jobType = 'Doctor'
// var companyZip = '77300'
// var workSinceDate = '2014-03-25'
// var companyAddress = 'KAYURINGIN KAMPUNG'

// var homeStatus = 'FAMILY'
// var monthlyRental = '5000000'
// var residentialZip = '77300'
// var residentialAreaCode = '+62'
// var residentialPhone = '660678988'
// var residentialAddress = 'KAYURINGIN KAMPUNG'


//Dropdown Selection
/*
selectAreaCode: {
    selector: '(//span[text()="' + areaCode + '"])',
    locateStrategy: 'xpath'
},
selectEducation: {
    selector: '//span[text()="' + education + '"]',
    locateStrategy: 'xpath'
},
selectMaritalStatus: {
    selector: '//span[text()="' + maritalStatus + '"]',
    locateStrategy: 'xpath'
},
selectDependents: {
    selector: '//span[text()="' + dependencies + '"]',
    locateStrategy: 'xpath'
},
selectProvince: {
    selector: '//span[text()="' + province + '"]',
    locateStrategy: 'xpath'
},
selectCity: {
    selector: '//span[text()="' + city + '"]',
    locateStrategy: 'xpath'
},
selectRegion: {
    selector: '//span[text()="' + region + '"]',
    locateStrategy: 'xpath'
},
selectKelurahan: {
    selector: '//span[text()="' + kelurahan + '"]',
    locateStrategy: 'xpath'
},
selectEmploymentStatus: {
    selector: '//span[text()="' + employmentStatus + '"]',
    locateStrategy: 'xpath'
},
selectJobPosition: {
    selector: '//span[text()="' + jobPosition + '"]',
    locateStrategy: 'xpath'
},
selectCompanyAreaCode: {
    selector: '//span[text()="' + companyAreaCode + '"]',
    locateStrategy: 'xpath'
},
selectJobType: {
    selector: '//span[text()="' + jobType + '"]',
    locateStrategy: 'xpath'
},
selectWorkSinceDate: {
    selector: '/html/body/div[2]/div[1]/div/div[2]/table[1]/tbody/tr[2]/td[7]',
    locateStrategy: 'xpath'
},
selectResidentialAreaCode: {
    selector: '//span[text()="' + residentialAreaCode + '"]',
    locateStrategy: 'xpath'
},
selectHomeStatus: {
    selector: '//span[text()="' + homeStatus + '"]',
    locateStrategy: 'xpath'
}
*/