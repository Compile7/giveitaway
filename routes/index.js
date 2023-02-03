const express = require("express");
const userRoute = require("./user.route.js");

const router = express.Router();
router.get("/api-status", (req,res)=>{
    return res.status(200).json({"ResponseStatusCode":200,'Message' : "successful"}); 
});
router.use("/user", userRoute);

module.exports = router;