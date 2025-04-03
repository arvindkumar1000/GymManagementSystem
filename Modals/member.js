const mongooes = require('mongoose');
const { type } = require('os');


const memberSchema = mongooes.Schema({
    name: {
        type: String,
        required: true,
    },
    joinDate: {
        type: Number
    },
    address: {
        type: String
    },
    mobileNo: {
        type: String
    },
    memberShip: {
        type: mongooes.Schema.Types.ObjectId,
        ref: "memberShip",
        required: true
    },
    gym: {
        type: mongooes.Schema.Types.ObjectId,
        ref: "gym",
        required: true
    },
    profilePic: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Active"
    },
    lastPayment: {
        type: Date,
        default: new Date()
    },
    nextBillDate: {
        type: Date,
        required: true
    }
})


const memberModel = mongooes.model("member", memberSchema);
module.exports = memberModel;