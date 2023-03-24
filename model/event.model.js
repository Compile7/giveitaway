const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const eventsSchema = new Schema({
    eventName: { type: String, required: true },
    count: { type: Number, default: 0},
}, {
    strict: false,
    timestamps: true
});

const event = new mongoose.model('events', eventsSchema);

exports.findOneWithParams = async (condition, params) => {
    let value = await event.findOne(condition, params);
    return value;
};

exports.findAll = async (condition, params, sort = '_id') => {
    let value = await event.find(condition, params).sort(sort);
    return value;
};

exports.insertMany = async (data) => {
    let value = await event.insertMany(data);
    return value;
};

exports.updateById = async (id, data) => {
    let value = await event.findByIdAndUpdate(id, data);
    return value;
};

exports.create = async (data) => {
    let value = await event.create(data);
    return value;
}