const express = require("express");
const {getNgoList, updateNgoList, ngoCount, like, disLike} = require("../modules/ngo/ngo.controller.js");
const {getCitiesList, getActiveCitiesList} = require("../modules/cities/cities.controller.js");
const {getEventCount, AddEventCount, getBasicInfo} = require("../modules/event/event.controller.js");
const ngoValidation = require('../validator/ngo/ngo.validation');
const eventValidation = require('../validator/event/event.validation');
const router = express.Router();

router.get("/getNgoList", ngoValidation.getNgoList, getNgoList);
router.put("/updateNgoList", updateNgoList);
router.get("/ngoCount", ngoCount);
router.put("/like/:id", like);
router.put("/disLike/:id", disLike);

//fetch city
router.get("/getCities", getCitiesList);
router.get("/getActiveCities", getActiveCitiesList);

//event APIs
router.get("/getEventCount", eventValidation.getEventCount, getEventCount);
router.post("/addEventCount", eventValidation.addEventCount, AddEventCount);

//info API
router.get("/basicInfo", getBasicInfo);

module.exports = router;
