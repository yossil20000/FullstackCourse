var express = require('express');

var router = express.Router();

router.get('/renderme', (req,res) => {
    return  res.render('index',{title:"Yossi Title" ,header: 'This is dynamic header',arr:[{name:'yossi', age: 23} , {name:'lev', age: 123}]});
    //res.send("hello");
});

module.exports = router;