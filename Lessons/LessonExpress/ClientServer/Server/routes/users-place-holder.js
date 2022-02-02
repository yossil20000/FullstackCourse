var express = require("express");
const res = require('express/lib/response');
var router = express.Router();
var fileDb = require("../Moduls/dataDb");

router.get('/', async function(req,res,next){
    
    try{
        const result = await fileDb.getAllUsers();
        return res.status(201).json({"success": true,"data": result});
    }
    catch(errors){
        console.errors(errors);
        res.status(401).json({"success":false,"message": `Failed to get error:${errors}`});
    }
    
});
router.get('/search', async function(req,res,next){
    const {id,name,limit} = req.query;
    
    try{
        if(req.query){
            console.log(`Search: id: ${id},name: ${name},limit: ${limit}`)
        }
        const result = await fileDb.getAllUsersByfilter(Number(id),name,Number(limit));
        return res.status(201).json({"success": true, "data": result});
    }
    catch(errors){
        console.errors(errors);
        res.status(201).json({"success": false, "message": errors});
    }
    
});
router.get('/:id',function(req,res,next){
    res.send(`Usersplaceholder data id: ${req.params.id}`);
    try{

    }
    catch(errors){
        console.errors(errors);
    }
});


router.post('/', async function (req,res,next){

    console.log(req.body);
    
    
    try{
        const result = await fileDb.addUser(req.body);
        res.json(result);

    }
    catch(errors){
        console.errors(errors);
        return res.status(401).json({"success": false,"message": errors});
    }
});

router.put('/', async function (req,res,next){

    console.log(req.body);
    const result = await fileDb.updateUser(req.body);
    res.status(201).json({"success": true,"message":"Update User"});
    try{

    }
    catch(errors){
        console.errors(errors);
    }
});


router.delete('/:id', async function (req,res,next){
   
    const {id} = req.params; 
    console.log(`Requesr Delete id:${id}`);
    
    try{
        const result = await fileDb.deleteUser(id);
        res.json({"success": true,"id": result});
    }
    catch(errors){
        console.errors(errors);
        res.status(401).json({"success": false,"id": 0})
    }
});

module.exports = router;