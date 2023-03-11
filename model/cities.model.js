const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const citiesSchema = new Schema({
    cityName: { type: String, required: false },
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
}, {
    strict: false,
    timestamps: true
});

const cities = new mongoose.model('cities', citiesSchema);

exports.findOneWithParams = async (condition, params) => {
    let value = await cities.findOne(condition, params);
    return value;
};

exports.findAllWithParams = async (condition, params, perPage = 10, page = 0) => {
    let value = await cities.find(condition, params).sort('_id').limit(perPage).skip(perPage * page);
    return value;
};

exports.findAll = async (condition, params, sort = '_id') => {
    let value = await cities.find(condition, params).sort(sort);
    return value;
};

exports.findCount = async (condition) => {
    let count = await cities.count(condition);
    return count;
};

exports.insertMany = async (data) => {
    let value = await cities.insertMany(data);
    return value;
};

exports.updateById = async (id, data) => {
    let value = await cities.findByIdAndUpdate(id, data);
    return value;
};