var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const todosDb = require("../Moduls/todosDb");
router.get('/help', (req, res, mext) => {
    let help = 
    `<h1>Todos API Summary</h1>
    <ul>
        <li>
            <h2>Get</h2>
            <ul>
                <li>"/ get all todos"</li>
                <li>"/search/?completed=true/false&userid=1&limit=10 get filterd todos"</li>
                <li>"/reset reset data to original"</li>
                <li>"/reset reset data to original"</li>
            </ul>
        </li>
        <li>
            <h2>Delete</h2>
            <ul>
                <li>"/id delete todo item with id value"</li>
                <li>"/user/userId delete all the todos for the userId"</li>
            </ul>
        </li>
        <li>
            <h2>Put</h2>
            <ul>
                <li>"/ edit the item todo  from body"</li>
            </ul>
        </li>
        <li>
            <h2>Post</h2>
            <ul>
                <li>"/ Add new Item  from body"</li>
            </ul>
        </li>
    </ul>
    `
    res.status(200).send(help);
})
router.get('/', async (req, res, next) => {
    try {
        const results = await todosDb.getAllTodos();
        return res.status(201).json({ "success": true, "data": results });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ "success": false, "message": "Failed to get todos" });
    }
});

router.get('/search', async (req, res, next) => {
    try {
        const { completed, userid, limit } = req.query;

        const results = await todosDb.gettodosfilters(completed == "true", Number(userid), Number(limit));
        return res.status(201).json({ "success": true, "data": results });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ "success": false, "message": "Failed to get todos" });
    }

});
router.get('/reset', async (req, res, next) => {
    try {


        const results = await todosDb.resetData()
        return res.status(201).json({ "success": true, "data": results });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ "success": false, "message": "Failed to get reset todos" });
    }

});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id) {
            const results = await todosDb.deletetodoById(Number(id));
            return res.status(201).json({ "success": true, "data": results });
        }
        else {
            console.error(`Delete todos illigal paramd id:${id}`);
            res.status(401).json({ "success": false, "message": "pleae enter liggal id" });
        }

    }
    catch (error) {
        console.error(error);
        res.status(400).json({ "success": false, "message": "Failed to get todos" });
    }
});
router.delete('/user/:userid', async (req, res, next) => {
    try {
        const { userid } = req.params;
        if (userid) {
            const results = await todosDb.deletetodoByUserId(Number(userid));


            return res.status(201).json({ "success": true, "data": results });
        }
        else {
            console.error(`Delete todos illigal paramd userid:${userid}`);
            res.status(401).json({ "success": false, "message": "pleae enter liggal id" });
        }

    }
    catch (error) {
        console.error(error);
        res.status(400).json({ "success": false, "message": "Failed to get todos" });
    }
});
router.post('/', async (req, res, next) => {
    const item = req.body;
    try {
        const results = await todosDb.addtodo(item);
        return res.status(201).json({ "success": true, "data": results });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ "success": false, "message": "Failed to get todos" });
    }
});

router.put('/', async (req, res, next) => {
    const item = req.body;
    try {
        console.log("item: ", item)
        const results = await todosDb.updateTodo(item);

        return res.status(201).json({ "success": true, "data": results });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ "success": false, "message": "Failed to get todos" });
    }
});




module.exports = router;