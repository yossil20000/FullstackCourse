var express = require("express");
const res = require('express/lib/response');
var router = express.Router();
var db = require("../MongoDB/controller");

router.get('/', async function (req, res, next) {
    try {
        const result = await db.getAllUsers();
        return res.status(201).json({ "success": true, "elements": result.length, "data": result });
    }
    catch (errors) {
        console.log(errors);
        return res.status(401).json({ "success": false, "error_name": errors.name, "error_message": errors.message  });
    }
});
router.get('/search', async function (req, res, next) {
    const { id, name, limit } = req.query;
    try {
        if (req.query) {
            console.log(`Search: id: ${id},name: ${name},limit: ${limit}`)
        }
        const result = await db.getSearchUser(id, name, limit);
        return res.status(201).json({ "success": true, "elements": result.length, "data": result });
    }
    catch (errors) {
        console.error(errors);
        return res.status(401).json({ "success": false, "error_name": errors.name, "error_message": errors.message  });
    }

});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id) {
            const result = await db.deletetodoById(id);
            return res.status(201).json({ "success": true, "elements": result.length, "data": result });
        }
    }
    catch (errors) {
        console.log(errors);
        return res.status(401).json({ "success": false, "error_name": errors.name, "error_message": errors.message  });
    }
});

router.delete('/tasks/:userId', async (req, res, next) => {

    try {
        const { userId } = req.params;
        if (userId) {
            console.log(`req.params.userId = ${userId}`);
            const result = await db.deletetodoByUserId(Number(userId));
            return res.status(201).json({ "success": true, "elements": result.length , "data": result });
        }
        return res.status(401).json({ "success": false, "message": "pleae enter liggal userid" });
    }
    catch (errors) {
        console.log(errors);
        return res.status(401).json({ "success": false, "error_name": errors.name, "error_message": errors.message  });
    }
});

router.get('/tasks', async (req, res, next) => {

    try {
        const result = await db.getAllTasks();
        return res.status(201).json({ "success": true, "elements": result.length, "data": result });
    }
    catch (errors) {
        console.log(errors);
        return res.status(401).json({ "success": false, "error_name": errors.name, "error_message": errors.message  });
    }
});

router.get('/users/:userId/tasks', async (req, res, next) => {

    try {
        const { userId } = req.params;
        console.log(`userId: ${userId}`);
        const result = await db.getAllTasksForUser(Number(userId));
        return res.status(201).json({ "success": true, "elements": result.length ,"data": result });
    }
    catch (errors) {
        console.log(errors);
        return res.status(401).json({ "success": false, "error_name": errors.name, "error_message": errors.message  });
    }
});

router.post('/tasks', async (req,res,next) => {
    try {
       
       console.log(`tasks: ${req.body}`);
       const result = await db.addTasks(req.body);
       return res.status(201).json({ "success": true, "elements": result.length ,"data": result });
       //let result = {}
       //return res.status(201).json({ "success": true, "elements": result.length ,"data": req.body });
    }
    catch (errors) {
        console.log(errors);
        return res.status(401).json({ "success": false, "error_name": errors.name, "error_message": errors.message  });
    }
});

router.put('/tasks', async (req,res,next) => {
    try {
       
       console.log(`tasks: ${req.body}`);
       const result = await db.updateTasks(req.body);
       return res.status(201).json({ "success": true, "elements": result.length ,"data": result });
       //let result = {}
       //return res.status(201).json({ "success": true, "elements": result.length ,"data": req.body });
    }
    catch (errors) {
        console.log(errors);
        return res.status(401).json({ "success": false, "error_name": errors.name, "error_message": errors.message  });
    }
});

module.exports = router;