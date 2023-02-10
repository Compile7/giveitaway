module.exports = {
  'port': process.env.PORT,
  'db': {
      'MONGO_PATH': process.env.MONGO_PATH,
      'MONGO_DBNAME': process.env.MONGO_DBNAME,
      'MONGO_HOST': process.env.MONGO_HOST,
      'MONGO_PASSWORD': process.env.MONGO_PASSWORD
  },
  "private_key": process.env.PRIVATE_KEY,
  "client_email": process.env.CLIENT_EMAIL,
  "client_id": process.env.CLIENT_ID,
  "client_x509_cert_url":  process.env.CLIENT_URL,
  "pin":  process.env.PIN,
  "sheet_key": process.env.SHEET_KEY
};
