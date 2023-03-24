'user strict';
const commonResponse = require('../../utils/commonResponse');
const AdminEventSchema = require('./event.schema');
const constants = require('../../utils/constants');
const { ServerStatusCode } = constants;
const { apiErrorRes } = commonResponse;
const errorMessage = (value, res, next) => {
    if (value.error) {
        console.log(value.error, '+++++++++++');
        apiErrorRes(
            res,
            value.error.details[0].message,
            ServerStatusCode.UNPROCESSABLE,
            true
        );
    } else {
        next();
    }
};

module.exports = { 
    getEventCount: async (req, res, next) => {
        const value = await AdminEventSchema.getEventCount.validate(req.query);
        errorMessage(value, res, next);
    },
    addEventCount: async (req, res, next) => {
        const value = await AdminEventSchema.addEventCount.validate(req.query);
        errorMessage(value, res, next);
    }
};
