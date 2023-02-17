'user strict';
const commonResponse = require('../../utils/commonResponse');
const AdminNgoSchema = require('./ngo.schema');
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
    getNgoList: async (req, res, next) => {
        const value = await AdminNgoSchema.getNgoList.validate(req.query);
        errorMessage(value, res, next);
    }
};
