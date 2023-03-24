'user strict';
const joi = require('joi');
const schema = {
    getEventCount: joi.object({
        eventName: joi.string().valid('click_donate_now', 'submit_user_info', 'contacted_ngo'),
    }),
    addEventCount: joi.object({
        eventName: joi.string().valid('click_donate_now', 'submit_user_info', 'contacted_ngo').required(),
    })
};

module.exports = schema;
