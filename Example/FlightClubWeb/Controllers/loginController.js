const { body } = require('express-validator');
const { DataTime, DateTime } = require('luxon');
const Member = require('../Models/member');
const log = require('debug-level').log('LoginController');
const mail = require("../Services/mail");
var login =  new Map();

exports.login = function(req,res,next){
    const email = req.body.email;
    const password = req.body.password;

    log.info(`login: ${email} `);
   
    Member.findOne({email: email}, (err, member) => {
        if(err){
            console.info(`${email} Access Denied ${err}`)
        }
        if(member)
        {
            member.comparePassword(password,(err, isMatch) => {
                if(err) {
                    console.info(`${email} Access Denied comp`)
                }
                else if(isMatch){
                    
                    console.info(`${email} Access Pemitted`)
                    log.info(`${member.date_of_birth_formatted}`)
                    return res.status(201).json({ success: true, errors: [], message: "Access Permited" });
                    
                }
                else{
                    console.info(`${email}  Access Denied ElseIf`)
                    log.info(member);
                    return res.status(401).json({ success: true, errors: [], message: "Access Denied" });
                }

            })
        }
        else
        {
            return res.status(401).json({ success: true, errors: [], message: "Access Denied" });
        }
        
    })
    
}
exports.reset = function(req,res,next){
    const email = req.body.email;
    const phone = req.body.phone;
    Member.findOne({email: email,code_area_phone:phone }, (err, member) => {
        if(err){
            console.info(`${email} Not Found ${err}`)
            return res.status(401).json({ success: false, errors: err, message: `${email} Not Found` });
        }
        if(member)
        {
            log.info(`phone: ${member.code_area_phone}`)
            var password = passwordGenrator(8);
            member.password = member.hash(password);
           Member.updateOne({email: email}, {password: member.password}).exec((err, result) => {
               if(err){
                console.log("Update Mail Failed", err);
                return  res.status(401).json({ success: false, errors: err, message: password });
               }
               else{
                   mail.SendMail(member.email,"Test", `Your temporary paassword is ${password}`).then((result) => {
                    console.log("Send Mail");
                    return res.status(201).json({ success: true, errors: [], message: password });
                   }
                    
                   ).catch((error => {
                    console.log("Send Mail");
                    return res.status(201).json({ success: false, errors: error, message: password });
                   })

                   );
                   
               }
            
           })
           
        }
        
        else
        {
            return res.status(401).json({ success: false, errors: err, message: `${email} Not Found` });
        }
})
}
function passwordGenrator(nChar){
    var password ="";
    const string_length = nChar
 password = [...Array(string_length)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
console.log(password);
return password;
}

function sendResetPassword(password,email){

}