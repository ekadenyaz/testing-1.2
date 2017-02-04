exports.dropDownPause = (browser, time) => {
  browser.pause(time)
}

exports.getGender = (genderCode) => {
  switch (genderCode) {
    case 'M':
      return 'MALE'
    case 'F':
      return 'FEMALE'
    default:
      return 'OTHER'
  }
}
exports.getEducation = (educationCode) => {
  switch (educationCode) {
    case 'TS':
      return 'NOT ATTENDING SCHOOL'
    case 'SD':
      return 'ELEMENTARY SCHOOL'
    case 'SMP':
      return 'JUNIOR_HIGH SCHOOL'
    case 'SMA':
      return 'SENIOR_HIGH SCHOOL'
    case 'SMK':
      return 'TECHNICAL COLLEGE'
    case 'S1':
      return 'BACHELOR DEGREE'
    case 'S2':
      return 'MASTER DEGREE'
    case 'S3':
      return 'DOCTOR DEGREE'
    default:
      return 'OTHERS'
  }
}
exports.getMaritalStatus = (maritalStatusCode) => {
  switch (maritalStatusCode) {
    case 'M':
      return 'MARRIED'
    case 'S':
      return 'SINGLE'
    case 'D':
      return 'DIVORCED'
    case 'W':
      return 'WIDOWED'
    default:
      return 'OTHERS'
  }
}
exports.getJobIndustries = (jobIndustriesCode) => {
  switch (jobIndustriesCode) {
    case '1000':
      return 'Agriculture Hunting Agricultural Facility'
    case '1111':
      return 'Food Crops Paddy'
    case '1115':
      return 'Palawija Nuts'
    case '1116':
      return 'Palawija Tuber'
    case '1117':
      return 'Palawija Corn'
    case '1119':
      return 'Other Palawija'
    case '1130':
      return 'Horticulture'
    case '1141':
      return 'Rubber plantations'
    case '1142':
      return 'Palm plantations'
    case '1143':
      return 'Coffee plantations'
    case '1144':
      return 'Tobacco plantations'
    case '1145':
      return 'Palm oil plantations'
    case '1146':
      return 'Pepper plantations'
    case '1147':
      return 'Tea leaf plantation'
    case '1148':
      return 'Sugar cane plantations'
    case '1149':
      return 'Cotton plantations'
    case '1150':
      return 'Clove plantations'
    case '1151':
      return 'Vanilla plantations'
    case '1152':
      return 'Nutmeg plantations'
    case '1153':
      return 'Cocoa plantations'
    case '1159':
      return 'Other plantations'
    case '1161':
      return 'Marine fishery - Shrimp'
    case '1163':
      return 'Other Marine fisheries'
    case '1164':
      return 'Ground fishery - Shrimp'
    case '1166':
      return 'Other Ground Fisheries'
    case '1167':
      return 'Brackish Fishery - Shrimp'
    case '1169':
      return 'Other Brackish Fishery'
    case '1171':
      return 'Poultry farm'
    case '1172':
      return 'Cattle farm'
    case '1179':
      return 'Other farm'
    case '1180':
      return 'Forestry and Lumber Mill (logging)'
    case '1200':
      return 'Hunting'
    case '1311':
      return 'Facility of Agriculture - Pompanisasi'
    case '1312':
      return 'Facility of Agriculture - Tractor'
    case '1313':
      return 'Facility of Agriculture - Warehouse/Sunning Spot'
    case '1314':
      return 'Facility of Agriculture - Paddy fields'
    case '1360':
      return 'Facility of Fishery'
    case '1370':
      return 'Facility of Livestock'
    case '1380':
      return 'Facility of Forestry'
    case '1390':
      return 'Other Facilities'
    case '2000':
      return 'Mining'
    case '2100':
      return 'Oil and Gas Mining'
    case '2210':
      return 'Mining of Metal Ores - Tin'
    case '2220':
      return 'Mining of Metal Ores - Nickel'
    case '2230':
      return 'Mining of Metal Ores - Bauxite'
    case '2240':
      return 'Mining of Metal Ores - Copper'
    case '2290':
      return 'Other Mining of Metal Ores'
    case '2300':
      return 'Coal Mining'
    case '2900':
      return 'Other Mineral Mining'
    case '3000':
      return 'Industry'
    case '3110':
      return 'Wheat'
    case '3120':
      return 'Sugar'
    case '3130':
      return 'Rice milling'
    case '3141':
      return 'Crude Palm Oil'
    case '3142':
      return 'Seeds Palm Oil'
    case '3149':
      return 'Other vegetable oils'
    case '3150':
      return 'Salt'
    case '3160':
      return 'Industry - Beverage'
    case '3170':
      return 'Tobacco'
    case '3180':
      return 'Cigarette'
    case '3190':
      return 'Other Food'
    case '3200':
      return 'Animal Feed and fish food'
    case '3310':
      return 'Industry - Textiles'
    case '3320':
      return 'Clothing'
    case '3330':
      return 'Leather'
    case '3410':
      return 'Industry - Wooden material'
    case '3420':
      return 'Wood Furniture'
    case '3490':
      return 'Other Wood'
    case '3510':
      return 'Industry - Paper and other paper'
    case '3520':
      return 'Industry - Printing and publishing'
    case '3530':
      return 'Paper Material (Pulp)'
    case '3610':
      return 'Fertilizer/ Pesticide'
    case '3620':
      return 'Industry - Pharmacy'
    case '3630':
      return 'Industry - Plastic'
    case '3640':
      return 'Other Chemical'
    case '3650':
      return 'Remilling and Smoke House'
    case '3660':
      return 'Crumb Rubber'
    case '3670':
      return 'Other Rubber'
    case '3680':
      return 'Essential Oil Industry'
    case '3690':
      return 'Industry - Chemical material/ Other Agricultural Products'
    case '3710':
      return 'Industry - Cement'
    case '3720':
      return 'Industry - Brick/ Roof Tile'
    case '3730':
      return 'Ceramic'
    case '3790':
      return 'Non Metallic Mine Processing'
    case '3810':
      return 'Industry - iron and steel'
    case '3890':
      return 'Industry - Other base metals'
    case '3911':
      return 'Foreign Component assembly - Maritime'
    case '3912':
      return 'Foreign Component assembly - Automotive'
    case '3913':
      return 'Foreign Component assembly - Electronics'
    case '3914':
      return 'Foreign Component assembly - Farming tools'
    case '3919':
      return 'Other Foreign Component assembly'
    case '3921':
      return 'Domestic Component assembly - Maritime'
    case '3922':
      return 'Domestic Component assembly - Automotive'
    case '3923':
      return 'Domestic Component assembly - Electronics'
    case '3924':
      return 'Domestic Component assembly - Farming tools'
    case '3929':
      return 'Other Domestic Component assembly'
    case '3931':
      return 'Manufacture of components - Maritime'
    case '3932':
      return 'Manufacture of components - Automotive'
    case '3933':
      return 'Manufacture of components - Electronics'
    case '3934':
      return 'Manufacture of components - Farming tools'
    case '3939':
      return 'Manufacture of other components'
    case '3990':
      return 'Industry - Others'
    case '4110':
      return 'Industry - Rural electricity'
    case '4190':
      return 'Other Electricity'
    case '4200':
      return 'Industry - Gas'
    case '4300':
      return 'Industry - Water'
    case '5000':
      return 'Construction'
    case '5110':
      return 'Small housing BTN'
    case '5120':
      return 'Small housing PERUMNAS'
    case '5190':
      return 'Other small housing'
    case '5200':
      return 'Inpres market'
    case '5300':
      return 'Land Preparation for Transmigration Settlement'
    case '5400':
      return 'Paddy Fields'
    case '5500':
      return 'Roads and Bridges'
    case '5600':
      return 'Harbor'
    case '5700':
      return 'Irrigation'
    case '5810':
      return 'Rural electricity'
    case '5890':
      return 'Other electricity'
    case '5900':
      return 'Projects with Foreign Loans'
    case '5990':
      return 'Other Construction'
    case '6000':
      return 'Trading/ Restaurant/ Hotel'
    case '6111':
      return 'Export of Raw Materials Palm Oil Seeds'
    case '6112':
      return 'Export of Raw Materials wood'
    case '6113':
      return 'Export of Raw Materials Rattan'
    case '6114':
      return 'Export of Raw Materials forest other than wood and rattan'
    case '6115':
      return 'Export of Raw Materials food crop yields'
    case '6116':
      return 'Export of Raw Materials Live animals & its products'
    case '6117':
      return 'Export of Raw Materials Tin Ore'
    case '6118':
      return 'Export of Raw Materials Metal Ores other than Tin Ore'
    case '6119':
      return 'Export of Raw Materials Coal'
    case '6129':
      return 'Export of other Raw Materials'
    case '6131':
      return 'Exports of semi-finished sawn timber'
    case '6132':
      return 'Exports of semi-finished Coffee bean'
    case '6133':
      return 'Exports of semi-finished Tobacco'
    case '6134':
      return 'Exports of semi-finished Rubber'
    case '6135':
      return 'Exports of semi-finished Pepper'
    case '6136':
      return 'Exports of semi-finished Palm Oil'
    case '6137':
      return 'Exports of semi-finished Palm Oil Seed'
    case '6138':
      return 'Exports of semi-finished Copra'
    case '6139':
      return 'Exports of semi-finished products of other food crops'
    case '6140':
      return 'Exports of semi-finished animals that have been processed'
    case '6141':
      return 'Exports of semi-finished other food items'
    case '6142':
      return 'Exports of semi-finished mining products'
    case '6159':
      return 'Exports of other semi-finished products'
    case '6161':
      return 'Export of finished plywood and kind'
    case '6162':
      return 'Export of finished good Tea Leaf'
    case '6163':
      return 'Export of finished coffee powder'
    case '6164':
      return 'Export of finished food crop yields'
    case '6165':
      return 'Export of finished shrimp'
    case '6166':
      return 'Export of finished animal other than shrimp'
    case '6167':
      return 'Export of finished Handicrafts of Wood and Rattan'
    case '6168':
      return 'Export of finished Handicrafts other than Wood and Rattan'
    case '6169':
      return 'Export of finished textiles'
    case '6170':
      return 'Export of finished clothing other than textiles'
    case '6179':
      return 'Export of other finished goods'
    case '6180':
      return 'Export construction services'
    case '6190':
      return 'Export other services'
    case '6211':
      return 'Imports in the context of foreign aid - Wheat Seed'
    case '6212':
      return 'Imports in the context of foreign aid - Rice'
    case '6213':
      return 'Imports in the context of foreign aid - Cotton'
    case '6214':
      return 'Imports in the context of foreign aid - Yarn'
    case '6219':
      return 'Imports in the context of foreign aid - others'
    case '6221':
      return 'Imports not in the context of foreign aid - fertilizers and pesticides'
    case '6222':
      return 'Imports not in the context of foreign aid - concrete steel'
    case '6223':
      return 'Imports not in the context of foreign aid - newsprint'
    case '6224':
      return 'Imports not in the context of foreign aid - clove'
    case '6225':
      return 'Imports not in the context of foreign aid - rice'
    case '6226':
      return 'Imports not in the context of foreign aid - sugar'
    case '6227':
      return 'Imports not in the context of foreign aid - wheat seed'
    case '6228':
      return 'Imports not in the context of foreign aid - corn'
    case '6229':
      return 'Imports not in the context of foreign aid - soybeans'
    case '6230':
      return 'Imports not in the context of foreign aid - pharmacy'
    case '6231':
      return 'Imports not in the context of foreign aid - automobile parts'
    case '6232':
      return 'Imports not in the context of foreign aid - spare parts industry'
    case '6239':
      return 'Imports not in the context of foreign aid - other'
    case '6311':
      return 'The sale and purchase of goods domestic - Rice'
    case '6312':
      return 'The sale and purchase of goods domestic - Corn'
    case '6313':
      return 'The sale and purchase of goods domestic - Salt'
    case '6314':
      return 'The sale and purchase of goods domestic - sugar stocks'
    case '6315':
      return 'The sale and purchase of goods domestic - Wood'
    case '6316':
      return 'The sale and purchase of goods domestic - Rubber'
    case '6317':
      return 'The sale and purchase of goods domestic - Palm Oil'
    case '6318':
      return 'The sale and purchase of goods domestic - Votton'
    case '6319':
      return 'The sale and purchase of goods domestic - Copra'
    case '6320':
      return 'The sale and purchase of goods domestic - clove'
    case '6321':
      return 'The sale and purchase of goods domestic - pepper'
    case '6322':
      return 'The sale and purchase of goods domestic - tobacco'
    case '6323':
      return 'The sale and purchase of goods domestic - Coffee'
    case '6324':
      return 'The sale and purchase of goods domestic - Tea leaf'
    case '6325':
      return 'The sale and purchase of goods domestic - Animal & its product'
    case '6390':
      return 'The sale and purchase of goods domestic - others'
    case '6411':
      return 'Cement Distribution'
    case '6412':
      return 'Fertilizer/ Pesticide Distribution'
    case '6413':
      return 'Coarse cotton Distribution'
    case '6414':
      return 'Concrete steel Distribution'
    case '6415':
      return 'Newsprint Distribution'
    case '6416':
      return 'Rice Distribution'
    case '6417':
      return 'Sugar Distribution'
    case '6418':
      return 'Wheat Flour Distribution'
    case '6419':
      return 'Salt Distribution'
    case '6420':
      return 'Fuel Oil Distribution'
    case '6490':
      return 'Other Distribution'
    case '6500':
      return 'Retail Trade'
    case '6610':
      return 'Restaurant'
    case '6620':
      return 'Hotel'
    case '7000':
      return 'Transportation Warehousing and Communications'
    case '7110':
      return 'Public Transport Ground'
    case '7120':
      return 'Public Transport River'
    case '7130':
      return 'Public Transport Ocean'
    case '7140':
      return 'Public Transport Air'
    case '7200':
      return 'Travel Agency'
    case '7300':
      return 'Warehousing'
    case '7400':
      return 'Communications'
    case '8000':
      return 'Business services'
    case '8111':
      return 'Small housing PERUMNAS'
    case '8119':
      return 'Small housing other than PERUMNAS'
    case '8120':
      return 'Real Estate - Inpres Market'
    case '8190':
      return 'Other Real Estate'
    case '8200':
      return 'Professions other than doctors'
    case '8300':
      return 'Leasing'
    case '8900':
      return 'Other business'
    case '9000':
      return 'Social/ Society'
    case '9100':
      return 'Entertainment and culture'
    case '9210':
      return 'Healthcare - profession'
    case '9220':
      return 'Healthcare - place of care/ treatment'
    case '9310':
      return 'Educational - Higher Education'
    case '9390':
      return 'Other Educational'
    case '9900':
      return 'Social/ other Society'
    case '9950':
      return 'Others - Housing'
    case '9960':
      return 'Others - Vehicle'
    case '9970':
      return 'Others - Household appliance'
    default:
      return 'Others'
  }
}
exports.getJobPosition = (jobPositionsCode) => {
  switch (jobPositionsCode) {
    case 'E':
      return 'Director'
    case 'M':
      return 'Manager'
    case 'S':
      return 'Staff'
    case 'V':
      return 'Supervisor'
    default:
      return 'Others'
  }
}
exports.getJobTypes = (jobTypesCode) => {
  switch (jobTypesCode) {
    case '0995':
      return 'Others / Theologian and Pastor'
    case '0996':
      return 'Others / Journalist'
    case '0997':
      return 'Others / Midwife'
    case '0998':
      return 'Others / Fisherman'
    case '0999':
      return 'Others / Farmer'
    case '09991':
      return 'Others / Artist & Entertainment'
    case '09992':
      return 'Others / Housewife'
    case '09993':
      return 'Others / Notary Public'
    case 'ACCT':
      return 'Accountant/Finance'
    case 'ADUM':
      return 'General Administration'
    case 'CS':
      return 'Customer Service'
    case 'CV':
      return 'Conversion'
    case 'DKTR':
      return 'Doctor'
    case 'DLL':
      return 'Others'
    case 'EKS':
      return 'Executive'
    case 'ENGR':
      return 'Engineering'
    case 'KOMP':
      return 'Computer'
    case 'KONS':
      return 'Consultant'
    case 'KYWASING':
      return 'Employees of foreign private company'
    case 'KYWSWASTA':
      return 'Private employees'
    case 'KYWTBK':
      return 'Employees of public private company'
    case 'MHS':
      return 'Student / College student'
    case 'MLTR':
      return 'Military'
    case 'MRKT':
      return 'Marketing'
    case 'PDK':
      return 'Education'
    case 'PEGBUMN':
      return 'SOE Employees'
    case 'PEGNEGRI':
      return 'Government employees'
    case 'PEGPOLRI':
      return 'INP members'
    case 'PEGTNI':
      return 'Military members'
    case 'PMRT':
      return 'Government'
    case 'PSUN':
      return 'Retired'
    case 'WRST':
      return 'Entrepreneur'
    default:
      return 'Others'
  }
}

exports.getHomeStatus = (homeStatusCode) => {
  switch (homeStatusCode) {
    case 'KL':
      return 'FAMILY'
    case 'KP':
      return 'SHORT RENT'
    case 'KR':
      return 'RENT'
    case 'KS':
      return 'OTHERS'
    case 'PE':
      return 'COMPANY'
    case 'SD':
      return 'OWN'
    default:
      return 'OTHERS'
  }
}
