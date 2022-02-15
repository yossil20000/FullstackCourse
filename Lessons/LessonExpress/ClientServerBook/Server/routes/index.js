/* We've set up all our new routes, but we still have a route to the original page. Let's instead redirect this to the new index page that we've created at the path '/catalog'. */
var express = require('express');
var router = express.Router();
// GET home page.
router.get('/', function(req, res) {
    res.redirect('/catalog');
  });

  module.exports = router;