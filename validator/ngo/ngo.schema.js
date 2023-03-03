'user strict';
const joi = require('joi');
const schema = {
    getNgoList: joi.object({
        page: joi.number().min(0).required(),
        pageSize: joi.number().positive().required(),
        search: joi.string(),
        city: joi.string(),
        pincode: joi.number().positive(),
        categories: joi.string()
    })
};

module.exports = schema;
