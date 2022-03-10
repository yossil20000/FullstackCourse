#! /usr/bin/env node
require('dotenv').config()
//console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Member = require('./Models/member')
var DeviceType = require('./Models/deviceType')
var Device = require('./models/device')
var Flight = require('./Models/flight')
var FlightReservation = require('./Models/flightReservation')



var mongoose = require('mongoose');
var mongoDB = userArgs[0] === undefined ? process.env.MONGODB_URL : userArgs[0];
//console.log(mongoDB);

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var members = []
var deviceTypes = [];

function memberCreate(first_name, family_name, d_birth, d_join, memberId, cb) {
    memberdetail = { first_name: first_name, family_name: family_name, member_id: memberId }
    if (d_birth != false) memberdetail.date_of_birth = d_birth
    if (d_join != false) memberdetail.date_of_join = d_join

    var member = new Member(memberdetail);

    member.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Member: ' + member);
        members.push(member)
        cb(null, member)
    });
}
function createMembers(cb) {
    async.series([
        function (callback) {
            memberCreate("Yosef", "Levy", "1965-08-21", "2011-11-01", "059828392", callback);
        },
        function (callback) {
            memberCreate("Giora", "Yahel", "1966-09-22", "2012-12-02", "259828392", callback);
        }
    ],
        cb
    );
}

function deviceTypeCreate(name, type, descrition, cb) {
    let deviceTypeDetailes = { name: name, type: type, description: descrition };
    let deviceType = new DeviceType(deviceTypeDetailes);
    deviceType.save(function (err) {
        if (err) {
            cb(err);
            return;
        }
        console.log(`New Device Type: ${deviceType}`);
        deviceTypes.push(deviceType);
        cb(null, deviceType);
    });
}

function createDeviceType(cb){
    async.series([
        function(callback){
            deviceTypeCreate("C-172P", "Airplane","Cessna",callback);
        }
    ],
    cb
    );
}


async.series([
    createMembers,
    createDeviceType
],
    // Optional callback
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('Members: ' + members);

        }
        // All done, disconnect from database
        mongoose.connection.close();
    });




