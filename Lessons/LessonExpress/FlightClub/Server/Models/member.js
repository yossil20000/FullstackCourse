var mongoose = require('mongoose')
const {DateTime} = require('luxon');

var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    member_id: {type: String, unique:true, required: true },
    family_name: {type: String, required: true },
    first_name: {type: String, required: true },
    date_of_birth: {type: Date, required: true},
    date_of_join: {type: Date, required: true},
    date_of_leave: {type: Date},
    flights: [{type: Schema.ObjectId,ref: 'Flight'}]
});
module.exports = mongoose.model('Member', MemberSchema);