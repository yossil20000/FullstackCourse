var mongoose = require('mongoose');



const {DateTime} = require('luxon');

var Schema = mongoose.Schema;
const Roll =require('../Models/roll').schema
var MemberSchema = new Schema({
    member_id: {type: String, required: true },
    family_name: {type: String, required: true },
    first_name: {type: String, required: true },
    contact:{
        billing_address: {
            line1: {type: String},
            line2: {type: String},
            city: {type: String},
            postcode: {type: String},
            province: {type: String},
            state: {type: String}
        },
        shipping_address: {
            line1: {type: String},
            line2: {type: String},
            city: {type: String},
            postcode: {type: String},
            province: {type: String},
            state: {type: String, uppercase:true}
        },
        phone: {
            country:{type: String, default: "972"},
            area: {type: String, default: "054"},
            number: {type: String, default: ""}
        },
        email: {type: String, unique:true, lowercase: true}
    },
    member_type:{type:String, enum:['Guest','Member'] , default: 'Guest'},
    roll: {type: Roll, _id:false} ,
    date_of_birth: {type: Date, required: true},
    date_of_join: {type: Date, required: true},
    date_of_leave: {type: Date},
    flights: [{type: Schema.ObjectId,ref: 'Flight'}],
    flight_reserv: [{type: Schema.ObjectId, ref: 'FlightReservation'}]
});

MemberSchema.virtual('date_of_birth_formatted')
.get(function () {
    return DateTime.fromJSDate(this.date_of_birth).toLocaleString(DataTime.DATE_MED);
});

MemberSchema.virtual('date_of_join_formatted')
.get(function () {
    return DateTime.fromJSDate(this.date_of_join).toLocaleString(DataTime.DATE_MED);
});

MemberSchema.virtual('date_of_leave_formatted')
.get(function () {
    return DateTime.fromJSDate(this.date_of_leave).toLocaleString(DataTime.DATE_MED);
});

module.exports = mongoose.model('Member', MemberSchema);