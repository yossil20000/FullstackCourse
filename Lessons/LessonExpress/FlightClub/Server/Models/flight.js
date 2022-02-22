var mongoose = require('mongoose');
const { DataTime } = require('luxon');

var Schema = mongoose.Schema;

var FlightSchema = new Schema({
    flight_reservation: {type: Schema.Types.ObjectId, ref: 'FlightReservation' , required: true},
    hobbs_start: {type: Date },
    hobbs_stop: {type: Date},
    engien_start: {type: Date},
    engien_stop: {type: Date},
    status: {type: String, enum:["CREATED","OPEN","CLOSE"]}


});

module.exports = mongoose.model('Flight', FlightSchema);