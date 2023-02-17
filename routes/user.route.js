const express = require("express");
const {getNgoList, updateNgoList, ngoCount} = require("../modules/ngo/ngo.controller.js");
const ngoValidation = require('../validator/ngo/ngo.validation');
const router = express.Router();

router.get("/getNgoList", ngoValidation.getNgoList, getNgoList);
router.put("/updateNgoList", updateNgoList);
router.get("/ngoCount", ngoCount);

module.exports = router;
