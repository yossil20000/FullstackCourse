var express = require('express');
var router = express.Router();
var loginController = require('../Controllers/loginController');

router.post('/login', loginController.login);
router.post('/reset', loginController.reset);
module.exports = router;