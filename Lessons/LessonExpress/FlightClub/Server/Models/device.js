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
    hobbs_meter: {type: Number},
    engien_meter: {type: Number},
    flights: [{type: Schema.ObjectId,ref: 'Flight'}]
});
module.exports = mongoose.model('Device', DeviceSchema);