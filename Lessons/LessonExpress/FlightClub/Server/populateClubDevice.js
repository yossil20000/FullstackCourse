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
var DeviceType = require('./Models/deviceType')
var Device = require('./models/device')
var Member = require('./Models/member')
var FlightReservation = require('./Models/flightReservation');

var mongoose = require('mongoose');
var mongoDB = userArgs[0] === undefined ? process.env.MONGODB_URL : userArgs[0];
//console.log(mongoDB);

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const dropCollection = require('./dropCollection');
//dropCollection(["devicetypes"],mongoose);
let collections = ["devicetypes",'members','devices','flightreservations'];
let dropCollections = function() {
    //var collections = _.keys(mongoose.connection.collections)
    collections.forEach( collectionName => {
      var collection = mongoose.connection.collections[collectionName]
      collection.drop(function(err) {
        if (err && err.message != 'ns not found') console.log("Drop Done:" +err)
        console.log("Drop Done:" +null)
      })
    })
  } 

dropCollections();
const devices = []
const deviceTypes = [];
const flightReservations =[];
const flights =[];
const members =[];
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

function deviceTypeCreate(name,description,category,engien,surface ,cb){
    let deviceTypeDetail = {
        name: name,
        category: category,
        class:{
            surface: surface,
            engien: engien
        },
        description: description
    }
    let deviceType = new DeviceType(deviceTypeDetail);
    deviceType.save(function(err)  {
        if(err) {cb(err,null); return;}
        console.log('New DeviceType:' + deviceType);
        deviceTypes.push(deviceType);
        cb(null,deviceType);

    });

}
function deviceCreate(device_id,device_type, description,available,device_status,due_date,hobbs_meter, engien_meter, cb){
    let deviceDetail = {
        device_id: device_id,
        device_type: device_type,
        description: description,
        available: available,
        device_status: device_status,
        due_date: due_date,
        hobbs_meter: hobbs_meter,
        engien_meter: engien_meter
    }
    let device = new Device(deviceDetail);
    device.save(function(err) {
        if(err){ cb(err,null); return;}
        console.log('New Device: ' , device);
        devices.push(device);
        cb(null,device);
    });

};

function createDeviceTypes(cb){
    async.series([
        function(callback){
            deviceTypeCreate("C-172P","Cessana","Airplane","SingleEngien","Land",callback);
        },
        function(callback){
            deviceTypeCreate('C-172',"Cessana","Airplane","SingleEngien","Sea",callback);
        }
    ],
    cb );
};

function createDevice(cb){
    async.series([
        function(callback){
            deviceCreate("4X-CGC",deviceTypes[0],"With G1000",true,"IN_SERVICE",null,4500,3459,callback);
        },
        function(callback){
            deviceCreate("4X-XXX",deviceTypes[1],"With G500",true,"IN_SERVICE",null,4500,3459,callback);
        }
    ],
    cb);
};

async.series([
    createMembers,
    createDeviceTypes,
    createDevice
],
function(err,results){
    if(err){
        console.log('FINAL ERR: ', + err );
    }
    else{
        console.log('DEVICES' + devices);
    }
    mongoose.connection.close();
}
);