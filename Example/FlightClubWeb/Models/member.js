var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;



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
        email: {type: String, lowercase: true , index: {unique:true}}
    },
    password: {type: String, required: true},
    member_type:{type:String, enum:['Guest','Member'] , default: 'Guest'},
    roll: {type: Roll, _id:false} ,
    date_of_birth: {type: Date, required: true},
    date_of_join: {type: Date, required: true},
    date_of_leave: {type: Date},
    flights: [{type: Schema.ObjectId,ref: 'Flight'}],
    flight_reserv: [{type: Schema.ObjectId, ref: 'FlightReservation'}]
},{timestamps: true});

MemberSchema.pre('save', function(next) { 
    var user = this;

   if(!user.isModified('passwors')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt)  {
        if(err) return(next(err));
        bcrypt.hash(user.password, salt, function(err,hash) {
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

MemberSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch)  {
        if(err) {return cb(err);}
        cb(null, isMatch);
    })
};
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