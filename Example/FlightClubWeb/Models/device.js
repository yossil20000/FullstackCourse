var mongoose = require('mongoose');
const { DataTime } = require('luxon');

var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    
    device_id: {type: String, unique: true, required: true},
    device_type: {type: Schema.Types.ObjectId , ref: 'DeviceType' },
    description: {type: String, maxLength: 200},
    available: {type: Boolean, default: false},
    device_status: {type:String, enum:["IN_SERVICE","OUT_OFSERVICE","MAINTANANCE","NOT_EXIST"], default:"IN_SERVICE"},
    due_date: {type: Date},
    hobbs_meter: {type: mongoose.Decimal128},
    engien_meter: {type: mongoose.Decimal128},
    maintanance: {
        type : {type: String, enum:["50hr", "100hr", "Annual"]},
        next_meter:{type: mongoose.Decimal128}
    },
    price:{
        base: {type: mongoose.Decimal128},
        meter: {type: String, enum:['HOBBS','ENGIEN']}
    },
    description:{
        image: {type: String},
        color: {type: String},
        seats: {type: Number},
        fuel: {type: Number},
        instruments: [{type: String, enum:["VFR","IFR","G100","ICE","AIR_CONDITION"]}]
    },
    can_reservs:[{type: Schema.ObjectId, ref: 'Member'}],
    flights: [{type: Schema.ObjectId,ref: 'Flight'}],
    flight_reservs: [{type: Schema.ObjectId, ref: 'FlightReservation'}]
});
module.exports = mongoose.model('Device', DeviceSchema);