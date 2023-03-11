const { findAllWithParams, insertMany, findAll, findCount, updateById } = require('../../model/cities.model');
const { findDistinct } = require('../../model/ngo.model');
const config = require("config");

/**
 *
 * @param {*} req request from client side
 * It's for get cities list
 */
const getCities = async (req) => {
  const response = await findAll({}, 'cityName');
  return {
    response
  };
};

const getActiveCities = async (req) => {
  const cities = await findDistinct('city');
  const response = await findAll({...cities?.length && {'cityName' : {"$in": cities}}}, 'cityName');
  return {
    response
  };
};

module.exports = {
  getCities,
  getActiveCities
};
