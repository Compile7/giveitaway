const express = require("express");
const {getNgoList, updateNgoList} = require("../modules/ngo/ngo.controller.js");
const ngoValidation = require('../validator/ngo/ngo.validation');
const router = express.Router();

router.get("/getNgoList", ngoValidation.getNgoList, getNgoList);
router.put("/updateNgoList", updateNgoList);

module.exports = router;
