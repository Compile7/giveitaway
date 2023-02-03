const mongoose = require('mongoose');
const config =  require('config');

const connectMongoDB = async () => {
    //Set the maximum poolSize for each individual server or proxy connection.

    const options = {
        // keepAlive: 600000,
        // connectTimeoutMS: 300000,
        // poolSize: 200,
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    console.log(`mongodb+srv://${config.get('db.MONGO_HOST')}:${config.get('db.MONGO_PASSWORD')}@${config.get('db.MONGO_PATH')}/${config.get('db.MONGO_DBNAME')}?retryWrites=true&w=majority`)
    try {
        //connect to the db - host:port/dbName
        await mongoose.connect(`mongodb+srv://${config.get('db.MONGO_HOST')}:${config.get('db.MONGO_PASSWORD')}@${config.get('db.MONGO_PATH')}/${config.get('db.MONGO_DBNAME')}?retryWrites=true&w=majority`,{});
        //MongoDb Instance connected
        console.log('MongoDb connected successfully');
    } catch (error) {
        //error connecting to db
        console.log('MongoDb connection error ====>',error);
        throw error;
    }
}

module.exports = connectMongoDB;
