const express  = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("../routes/index.js");

const app = express();

// CORS Middleware
app.use(cors());

// Request Payload Middleware
app.use(express.json());

//logger middleware function
app.use(morgan('dev'));

app.get("/", (req, res, next) => {
  res.send("Application backend started");
});

app.use('/api/v1', routes);

module.exports = app;