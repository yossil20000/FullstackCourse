const dataBase = require("./Moduls/dataDb");
const express = require("express");
const cors = require("cors");
const { json } = require("express");
const port = 3000;
const server = express();
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json()); 

server.get('/', async (req,res,next) => {
    console.log("Server /");
    try{
        const data = await dataBase.getAllUsers();
        res.send(data);
    }
    catch(err)
    {
        console.error(err);

    }
})


server.put('/User', async (req,res,next) =>{
    try{
        //const {id} = req.params;
        const {user} = req.body;
        console.log(`Server Update  ${req.body}`);
        //console.log(`Server Update ${id} ${user}`);
        const data = await dataBase.updateUser(req.body);
        res.send(data);
    }
    catch(err){
        console.error(err);
    }
    });

    server.post('/User', async (req,res,next) =>{
        try{
          
            const user = req.body;
            console.log(`Server Add user${JSON.stringify(user)}`);
            const data = await dataBase.addUser(req.body);
            res.status(200).json(data);
        }
        catch(err){
            console.error(err);
        }
        });
    

server.delete('/user/:id', async (req,res,next) =>{
try{
    console.log(`Server Delete ${req.params.id}`);
    const data = await dataBase.deleteUser(req.params.id);
    res.send(data);
}
catch(err){
    console.error(err);
}
});
/* (
    async () =>{
        const data = await dataBase.getAllUsers();
        console.log(`Data: ${data[0].id} , ${data[0].name}`);

    }
)(); */

server.listen(port , () => {
    console.log(`Yossi Server run on port: ${port}`);
});