var express = require('express');
var router = express.Router();

const deviceController = require('../Controllers/deviceController');

router.get('/',deviceController.device_list);

module.exports = router;