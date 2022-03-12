var mongoose = require('mongoose');
const constants = require('../Models/constants');

var Schema = mongoose.Schema;

const RollSchema = new Schema({
    rolls: [{type: String , enum: [constants.ROLLS[0],constants.ROLLS[1],constants.ROLLS[2],constants.ROLLS[3]], required: true, default: 'member' }] 
})

module.exports = mongoose.model('Roll', RollSchema);