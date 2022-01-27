const express = require("express");
const cors = require("cors");
const usersModule = require("./users/users.js");
const jsonFile = require("jsonfile");
const fileReader = require("fs");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//localhost:3005
app.get("/", async (req,res,next) => {
    try{
        console.log("Start");
        const data = await usersModule.getUsers();
        //res.send automatticaly next
        //res.send(data);
        const html =  fileReader.readFileSync("./client/index.html","utf-8");
        console.log(html);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
    
});



app.listen(3015);