var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const RollSchema = new Schema({
    rolls: {type: String , enum: ['member','desk','account','admin'], required: true, default: 'member'} 
})

module.exports = mongoose.model('Roll', RollSchema);