const dataBase = require("./Moduls/dataDb");
const express = require("express");
const cors = require("cors");
const port = 3000;
const server = express();
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json()); 

server.get('/', async (req,res,next) => {
    try{
        const data = await dataBase.getAllUsers();
        res.send(data);
    }
    catch(err)
    {
        console.error(err);

    }
})
server.listen(port , () => {
    console.log(`Server run on port: ${port}`);
});

/* (
    async () =>{
        const data = await dataBase.getAllUsers();
        console.log(`Data: ${data[0].id} , ${data[0].name}`);

    }
)(); */