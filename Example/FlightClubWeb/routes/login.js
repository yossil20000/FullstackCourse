var express = require('express');
var router = express.Router();
var loginController = require('../Controllers/loginController');
const authJWT = require('../middleware/authJWT');
router.post('/login', loginController.signin);
router.post('/reset', loginController.reset);
router.get('/hidden', authJWT.verifyToken, function(req,res,next) {

    if(!res.user){
        res.status(403).json(
            { success: false, errors: ["Invalid User token"], data: [] }
        )
    }
    else{
        res.status(200).json({ success: true, errors: [], data: {message: "Authorized"}});
    }
});
router.get('/hidden/:token', authJWT.verifyToken, function(req,res,next) {

    if(!res.user){
        res.status(403).json(
            { success: false, errors: ["Invalid User token"], data: [] }
        )
    }
    else{
        res.status(200).json({ success: true, errors: [], data: {message: "Authorized"}});
    }
})
module.exports = router;