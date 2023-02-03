const dotenv = require("dotenv");
dotenv.config();
const config = require("config");
const app = require("./connection/express.js");
const connectMongoDB = require("./connection/mongoconnection.js");
const {dataTransferToMongodb} = require("./modules/ngo/ngo.service");
var cron = require('node-cron');


const port = config.get("port") || 3000;

//schedule for data transfer
cron.schedule('*/2 * * * *', function(){
    console.log(`cron running`);
    dataTransferToMongodb();
    console.log(`cron successfully runned`);
});

connectMongoDB().then(() => {
    app.listen(port, () => {
        console.log(`Server Listening on PORT -  ${port}`);
    });
}).catch((error) => {
    console.log("error in while connecting mongoDB ERROR  =======> ", error);
});
