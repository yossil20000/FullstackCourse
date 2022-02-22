const Member = require('../Models/member');
const FlightReservation = require('../Models/flightReservation');

const async = require('async');
const log = require('debug-level').log('MemberController');

var {body,validationResult} = require('express-validator');

exports.member_list = function(req,res,next){
    log.info("member_list");
    Member.find()
    .sort([['family_name','ascending']])
    .exec(function(err,list_members){
        if(err){ return next(err);}
        res.status(201).json(list_members);
    })
}
exports.member_detail = function(req,res,next){
    log.info(`member_detail`);
    Member.findById(req.params.id)
        .exec(function(err,member){
            if(err) {return next(err);}
            res.status(201).json(member);
        });
}
exports.member_delete = function(req,res,next){
    log.info(`member_delete`);
    async.parallel({
        member: function(callback){
            Member.findById(req.body.memberId).exec(callback);
        },
        reservations_member:function(callback){
            FlightReservation.find({'member': req.body.memberId}).exec(callback);
        }
    }, function(err,results){
        if(err) { return next(err);}
        if(results.reservations_member > 0){
            res.status(401).json({"success": false,"msg": 'member has link reservation', "data": results.reservations_member })
        }
        else{
            Member.findByIdAndRemove(req.params.memberId, function(err,doc){
                if(err) { return next(err);}
                res.status(201).json(doc);
            });
        }
    });
}
exports.member_update = [
    body('_id').trim().isLength({min:1}).escape().withMessage('_id must be specified'),
    body('member_id').trim().isLength({min:1}).escape().withMessage('member_id must be specified'),
    body('first_name').trim().isLength({min: 1}).escape().withMessage('first_name must be specified '),
    body('family_name').trim().isLength({min:1}).escape().withMessage('family_name must be specified'),
    body('date_of_birth','Invalid date of birth').optional({checkFalsy: true}).isISO8601().toDate(),
    body('date_of_join','Invalid date_of_join').optional({checkFalsy: true}).isISO8601().toDate(),
    (req,res,next) => {
        const errors = validationResult(req);
        log.info(req.body);
        if(!errors.isEmpty()){
            res.status(401).json({success: false, errors : errors, data: req.body});
        }
        else{
            async.parallel(
                {
                    member_update: function(callback){
                        Member.findByIdAndUpdate(req.body._id,req.body,{}).exec(callback);
                    }        
                },function(err,results){
                    if(err)  {return next(err);}
                    else{
                        res.status(201).json({success: true, errors : [], data: results.member_update});
                        return;
                    }
                }
             );
            /* Member.findByIdAndUpdate(req.body,(err, doc) => {
                if(err) {return next(err);}
                res.status(201).json({success: true, errors : err, data: doc});
            }); */
        }
    }
];

exports.member_create = [
    body('member_id').trim().isLength({min:1}).escape().withMessage('member_id must be specified'),
    body('first_name').trim().isLength({min: 1}).escape().withMessage('first_name must be specified '),
    body('family_name').trim().isLength({min:1}).escape().withMessage('family_name must be specified'),
    body('date_of_birth','Invalid date of birth').optional({checkFalsy: true}).isISO8601().toDate(),
    body('date_of_join','Invalid date_of_join').optional({checkFalsy: true}).isISO8601().toDate(),
    (req,res,next) => {
        const errors = validationResult(req);
        log.info(req.body);
        if(!errors.isEmpty()){
            res.status(401).json({success: false, errors : errors, data: req.body});
        }
        else{
            const member = new Member(
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    member_id: req.body.member_id,
                    date_of_birth: req.body.date_of_birth,
                    date_of_join: req.body.date_of_join === undefined ? null : req.body.date_of_join
                    
                }
            );
            member.save((err) => {
                if(err) { return next(err);}
                res.status(201).json({success: true, data: member});
            });
        }
    }

];
