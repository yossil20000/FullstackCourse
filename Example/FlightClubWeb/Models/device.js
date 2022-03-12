var mongoose = require('mongoose');
const { DataTime } = require('luxon');
const CE = require('../Models/constants');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    
    device_id: {type: String, unique: true, required: true},
    device_type: {type: Schema.Types.ObjectId , ref: 'DeviceType' },
    description: {type: String, maxLength: 200},
    available: {type: Boolean, default: false},
    device_status: {type:String, 
        enum:[CE.DEVICE_STATUS[0],CE.DEVICE_STATUS[1],CE.DEVICE_STATUS[2],CE.DEVICE_STATUS[3]], default: CE.DEVICE_STATUS[0]},
    due_date: {type: Date},
    hobbs_meter: {type: mongoose.Decimal128},
    engien_meter: {type: mongoose.Decimal128},
    maintanance: {
        type : {type: String, enum:[CE.DEVICE_MT[0],CE.DEVICE_MT[1],CE.DEVICE_MT[2]] , default: CE.DEVICE_MT[0]},
        next_meter:{type: mongoose.Decimal128}
    },
    price:{
        base: {type: mongoose.Decimal128},
        meter: {type: String, enum:[CE.DEVICE_MET[0],CE.DEVICE_MET[1]], default:CE.DEVICE_MET[1]}
    },
    description:{
        image: {type: String},
        color: {type: String},
        seats: {type: Number},
        fuel: {
            quantity: {type: Number},
            units: {type:String, enum:['galon','litter'] , default:'galon'}
        },
        instruments: [{type: String, enum:[CE.DEVICE_INS[0],CE.DEVICE_INS[1],CE.DEVICE_INS[2],CE.DEVICE_INS[3],CE.DEVICE_INS[4]]}]
    },
    can_reservs:[{type: Schema.ObjectId, ref: 'Member'}],
    flights: [{type: Schema.ObjectId,ref: 'Flight'}],
    flight_reservs: [{type: Schema.ObjectId, ref: 'FlightReservation'}]
});
module.exports = mongoose.model('Device', DeviceSchema);