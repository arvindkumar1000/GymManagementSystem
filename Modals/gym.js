const { timeStamp } = require('console');
const mongooes = require('mongoose');
const { type } = require('os');


const gymSchema = mongooes.Schema({
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: true,

    },
    gymName: {
        type: String,
        reuired: true,
    },
    resetPasswordToken: {
        type: String,

    },
    resetPasswordExpires: {
        type: Date,

    }

}, { timeStamps: true })

const modal = mongooes.model("gym", gymSchema);

module.exports = modal;