const { findOneWithParams, create, findAll, updateById } = require('../../model/event.model');
const config = require("config");

/**
 *
 * @param {*} req request from admin side
 * It's for get event count list
 */
const getEvent = async (req) => {
  const { eventName } = req.query;
  let condition = {
    ...eventName && {eventName}
  };
  const response = await findAll(condition, '');

  return {
    response
  };
};

const AddEventClickCount = async (req) => {
  const { eventName } = req.query;
  let condition = {eventName}, response = {};
  const exist = await findOneWithParams(condition, '');
  if (!exist){
    response = await create({eventName, "count": 1});
    return {
      response
    };
  }
  response = await updateById(exist["_id"], {"$inc": {"count": 1}});
  return {
    response
  };
};

module.exports = {
  getEvent,
  AddEventClickCount
};