var mongoose = require('mongoose');
const { DataTime } = require('luxon');

var Schema = mongoose.Schema;
var FlightReservationSchema = new Schema({
    date_from: {type: Date, required: true, default: Date.now},
    date_to: {type: Date, required: true, default: Date.now},
    member: {type: Schema.Types.ObjectId, ref: 'Member', required: true},
    device: {type: Schema.Types.ObjectId, ref: 'Device', required: true},

});
module.exports = mongoose.model('FlightReservation', FlightReservationSchema);