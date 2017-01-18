module.exports = {
    url: 'http://192.168.50.91:8080/application',
    elements: {
        uploadButton: { selector: '#query' },
        //Identity Part
        nameField: { selector: 'input[type="text"]' [0] },
        pobField: { selector: 'input[type="text"]' [1] },
        nikField: { selector: 'input[type="text"]' [2] },
        zipField: { selector: 'input[type="text"]' [3] },
        areaCodeField: { selector: 'input[type="text]' [4] },
        mobileField: { selector: 'input[type="text"]' [5] },
        provinceField: { selector: 'input[type="text"]' [6] },
        educationField: { selector: 'input[type="text"]' [7] },
        cityField: { selector: 'input[type="text"]' [8] },
        maritalStatusField: { selector: 'input[type="text"]' [9] },
        regionField: { selector: 'input[type="text"]' [10] },
        dependentsField: { selector: 'input[type="text"]' [11] },
        kelurahanField: { selector: 'input[type="text"]' [12] },

        //Employment Part
        employmentStatusField: { selector: 'input[type="text"]' [13] },
        employerNameField: { selector: 'input[type="text"]' [14] },
        jobIndustryField: { selector: 'input[type="text"]' [15] },
        monthlyIncomeField: { selector: 'input[type="text"]' [16] },
        jobPositionField: { selector: 'input[type="text"]' [17] },
        companyLandlineField: { selector: 'input[type="text"]' [18] },
        jobTypeField: { selector: 'input[type="text"]' [19] },
        companyZipField: { selector: 'input[type="text"]' [20] },
        workSinceDateField: { selector: 'input[type="text"]' [21] },
        companyAddressField: { selector: 'input[type="text"]' [22] },

        //Residential Part
        homeStatusField: { selector: 'input[type="text"]' [23] },
        monthlyRentalField: { selector: 'input[type="text"]' [24] },
        residentialZipField: { selector: 'input[type="text"]' [25] },
        residentialPhoneField: { selector: 'input[type="text"]' [26] },
        residentialAddressField: {
            selector: 'input[type="text"]' [27]
        },
        submitButton: { selector: '#submit' },


        //Dropdown Selection
        selectAreaCode: {
            selector: '//span[text()="+62"]',
            locateStrategy: 'xpath'
        },
        selectEducation: {
            selector: '//span[text()="DOCTOR DEGREE"]',
            locateStrategy: 'xpath'
        },
        selectMaritalStatus: {
            selector: '//span[text()="OTHER"]',
            locateStrategy: 'xpath'
        },
        selectDependents: {
            selector: '//span[text()="5"]',
            locateStrategy: 'xpath'
        },
        selectProvince: {
            selector: '//span[text()="Maluku"]',
            locateStrategy: 'xpath'
        },
        selectCity: {
            selector: '//span[text()="Kab., Maluku Barat Daya"]',
            locateStrategy: 'xpath'
        },
        selectRegion: {
            selector: '//span[text()="Wetar"]',
            locateStrategy: 'xpath'
        },
        selectKelurahan: {
            selector: '//span[text()="Hiay"]',
            locateStrategy: 'xpath'
        },
        selectEmploymentStatus: {
            selector: '//span[text()="FULL TIME"]',
            locateStrategy: 'xpath'
        },
        selectJobPosition: {
            selector: '//span[text()="Director"]',
            locateStrategy: 'xpath'
        },
        selectJobType: {
            selector: '//span[text()="Engineering"]',
            locateStrategy: 'xpath'
        },
        selectWorkSinceDate: { selector: '.available' [0] },
        selectHomeStatus: {
            selector: '//span[text()="FAMILY"]',
            locateStrategy: 'xpath'
        }
    },
}