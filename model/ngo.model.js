const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ngoSchema = new Schema({
    ngoName: { type: String, required: true },
    registrationId: { type: String, required: false },
    contactNumber: { type: Array, required: false },
    website: { type: String, required: false },
    whatsappNumber: { type: Array, required: false },
    address: { type: String, required: false },
    pin: { type: Number, required: false },
    location: { type: String, required: false },
    category: { type: String, required: false },
    ifOther: { type: String, required: false },
    city: { type: String, required: false },
    workArea: { type: String, required: false },
    like: { type: Number, default: 0 },
    disLike: { type: Number, default: 0 }
}, {
    strict: false,
    timestamps: true
});

const ngo = new mongoose.model('ngo', ngoSchema);

exports.findOneWithParams = async (condition, params) => {
    let value = await ngo.findOne(condition, params);
    return value;
};

exports.findAllWithParams = async (condition, params, perPage = 10, page = 0, sort = 'like') => {
    let value = await ngo.find(condition, params).sort([[sort, -1]]).limit(perPage).skip(perPage * page);
    return value;
};

exports.findAll = async (condition, params, sort = '_id') => {
    let value = await ngo.find(condition, params).sort(sort);
    return value;
};

exports.findCount = async (condition) => {
    let count = await ngo.count(condition);
    return count;
};

exports.insertMany = async (data) => {
    let value = await ngo.insertMany(data);
    return value;
};

exports.updateById = async (id, data) => {
    let value = await ngo.findByIdAndUpdate(id, data);
    return value;
};