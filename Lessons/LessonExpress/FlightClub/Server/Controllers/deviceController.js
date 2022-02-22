const log = require('debug-level').log('DeviceController');
const async = require('async');
const {body,validationResult} = require('express-validator');

const Device = require('../Models/device');
const DeviceType = require('../Models/deviceType');

exports.device_list = function(req,res,next){
    log.info('device_list');
    Device.find()
    .sort([['device_id','ascending']])
    .exec(function(err, list_devices) {
        if(err) { return next(err); log.debug(err);}
        else{
            res.status(201).json({success: true, errors : [], data: list_devices});
            return;
        }
    });
}

exports.device_detail = function(req,res,next){
    
};