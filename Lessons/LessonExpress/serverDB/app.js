var express = require('express');
const taskModule = require('./controllers')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.listen(3000);

app.get('/getAllTasks', (req, res) => {
    taskModule.readAllTasks()
        .then(data => {
            res.send(data)
        }).catch(error =>
            res.send(error))
})

app.get('/getTasksByUserName', (req, res) => {
    taskModule.getTasksByUserName(req.body)
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(error =>
            res.send(error))
})

app.get('/getRecentTasks', (req, res) => {
    taskModule.getRecentTasks()
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(error =>
            res.send(error))
})

app.get('/getTasksByUser', (req, res) => {
    taskModule.getTasksByUserId(req.body)
        .then(data => {
            console.log(data)
            res.send({ "all user tasks": data })
        }).catch(error =>
            res.send(error))
})

app.get('/getTaskByMongoId/:_id', (req, res) => {
    taskModule.getTaskByMongoId(req)
        .then(data => {
            console.log(data)
            res.send( data )
        }).catch(error =>
            res.send(error))
})

// withParams
app.get('/:userId', (req, res) => {
    taskModule.getTasksByUserIdParams(req)
        .then(data => {
            console.log(data)
            res.send({ "all user tasks": data })
        }).catch(error =>
            res.send(error))
})

app.get('/getAllTasksByStatus', (req, res) => {
    taskModule.getAllTasksByStatus(req.body)
        .then((data) =>
            res.send(data))
        .catch(error =>
            res.send(error))
})

app.post('/newTask', (req, res) => {
    taskModule.addTask(req.body).then(data => {
        res.send({ "task added": data })
    })
        .catch(error => {
            res.send(error)
        })
})

app.put('/editTask', (req, res) => {
    taskModule.editTaskTitleById(req.body).then(data => {
        res.send(data)
    })
        .catch(error => {
            res.send(error)
        })
})

app.put('/editTaskStatus', (req, res) => {
    taskModule.editTaskStatus(req.body)
        .then((data) =>
            res.send({ "status changed": data }))
        .catch(error =>
            res.send(error))
})

app.delete('/removeTask', (req, res) => {
    taskModule.removeTaskById(req.body)
        .then(() =>
            res.send("task removed succesfully"))
        .catch(error =>
            res.send(error))
})