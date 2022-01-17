const express = require('express');
const app = express();
//Set ejs as view engine to render html
app.set("view engine","ejs");
app.get('/',(req,res) =>{
    console.log('Hi Cosole Express');
    // send is generic
    res.render("index",{text: "I am a text from Server to view me you need <%= %>"});
    //res.render("index");
    //res.download("server.js");
    //res.status(500).json({message: "Error 500"});
    //res.send(500);
    //res.send('Hi from express');
})
app.listen(3001);