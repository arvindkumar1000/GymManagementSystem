const { timeStamp } = require('console');
const mongooes = require('mongoose');
const { type } = require('os');


const memberShipSchema = mongooes.Schema({
    months: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    gym: {
        type: mongooes.Schema.Types.ObjectId,
        ref: "gym",
        required: true
    }
}, { timeStamps: true })

const modalMemebrShip = mongooes.model("memberShip", memberShipSchema);
module.exports = modalMemebrShip;