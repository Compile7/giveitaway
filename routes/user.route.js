const express = require("express");
const {getNgoList} = require("../modules/ngo/ngo.controller.js");

const router = express.Router();

router.get("/getNgoList", getNgoList);

module.exports = router;
