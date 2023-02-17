const { GoogleSpreadsheet } = require('google-spreadsheet');
const { findAllWithParams, insertMany, findAll } = require('../../model/ngo.model')
const config = require("config");

const formatSheetData = async (rows) => {
  const array = [];
  rows.forEach((row) => {
    let cNumber = row['Contact Number'];
    let wNumber = row['Whatsapp number (if different) (allowed to accept )'];
    wNumber = wNumber.replace(/\s/g,'').split(",");
    cNumber = cNumber.replace(/\s/g,'').split(",");
    array.push({
      ngoName: row['NGO Name'],
      registrationId: row['Registration ID'],
      contactNumber: cNumber,
      website: row['Website'],
      whatsappNumber: wNumber,
      address: row['Address'],
      pin: row['PIN'],
      location: row['Location of google map'],
      category: row['Category'],
      ifOther: row['If Other'],
      workArea: row['Work Area'],
      city: row['City']
    });
  })
  return array
}

/**
 *
 * @param {*} req request from client side
 * It's for get ngo list
 */
const getNgos = async (req) => {
  const { page, pageSize, search } = req.query;
  let condition = {};
  if (search) {
    condition['ngoName'] = new RegExp(search, 'i');
  }
  const response = await findAllWithParams(condition, '', pageSize, page);
  return {
    response
  };
};

const updateNgos = async (req) => {
  const { pin } = req.body;
  if (pin != config.get('pin')) {
    return {
      wrongPin: true
    }
  }
  await dataTransferToMongodb();
  return {
    response: true
  };
};


const dataTransferToMongodb = async () => {
  try {
    const doc = new GoogleSpreadsheet(config.get('sheet_key'));
    await doc.useServiceAccountAuth({
      client_email: config.get("client_email"),
      private_key: config.get("private_key"),
    });;
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const response = await formatSheetData(rows);
    const data = await findAll({}, '');
    const dataToUpdate = [];
    response.forEach((value) => {
      var flag = false;
      data.some((ngo) => {
        if (value.ngoName == ngo.ngoName) {
          flag = true;
        }
      })
      if (!flag) {
        dataToUpdate.push(value);
      }
    });
    console.log("dataToUpdate=>", dataToUpdate);
    await insertMany(dataToUpdate);
  } catch (error) {
    console.log("dataTransferToMongodb error ==>", error);
  }
}


module.exports = {
  getNgos,
  dataTransferToMongodb,
  updateNgos
};
