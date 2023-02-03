const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../../credentials.json');
const {findAllWithParams, insertMany, findAll} = require('../../model/ngo.model')

const formatSheetData = async(rows) => {
  const array = [];
  rows.forEach((row)=>{
    array.push({
      ngoName: row['NGO Name'],
      registrationId: row['Registration ID'],
      contactNumber: row['Contact Number'],
      website: row['Website'],
      whatsappNumber: row['Whatsapp number (if different) (allowed to accept )'],
      address: row['Address'],
      pin: row['PIN'],
      location: row['Location of google map'],
      category: row['Category'],
      ifOther: row['If Other'],
      workArea: row['Work Area']
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
  const {page, pageSize} = req.query;
  const response = await findAllWithParams({}, '', pageSize, page);
  return {
    response
  };
};


const dataTransferToMongodb = async () => {
  try {
    const doc = new GoogleSpreadsheet("1dHRrFt_IINqUeKPE1vxyb2PnKor-c7lHqQZn8Tz2k1g");
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });;
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const response = await formatSheetData(rows);
    const data = await findAll({}, '');
    const dataToUpdate = [];
    response.forEach((value)=>{
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
    await insertMany(response);
  } catch (error) {
    console.log("error ==>",error);
  }
}


module.exports = {
  getNgos,
  dataTransferToMongodb
};
