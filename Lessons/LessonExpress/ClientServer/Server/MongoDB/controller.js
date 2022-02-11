const res = require('express/lib/response');
const { rethrow } = require('jade/lib/runtime');
const mongodb = require('mongodb');
const { compile } = require('morgan');
const { getAllUsers } = require('../Moduls/dataDb');
const router = require('../routes/users');

const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';

const DBname = "AAA";

let tasksCollection;
let usersCollection;
MongoClient.connect(connectionUrl, (error, client) => {
    if (error) {
        return console.error("unable to connect to database", error)
    }
    console.log("mongo connected")
    const db = client.db(DBname)
    usersCollection = db.collection('Users');
    tasksCollection = db.collection('Tasks');
    tasksCollection.find({}).toArray().then(value => {
        //       console.log(value);
    });
    //usersCollection = db.collection('users')
    db.collection("Users").find({}).toArray().then(res => {
        //console.log(res);
    });
    // console.log(data);
})

exports.editTaskTileById = async (req) => {
    try {
        query = { id: req.id };
        update = { title: req.title };
        const collection = await tasksCollection.findOneAndUpdate(query, update);
        return collection;
    }
    catch (errors) {
        console.log(errors);
        throw errors;
    }
};

exports.getAllUsers = async () => {
    try {
        const collection = await usersCollection.find({}).toArray();
        return collection;
    }
    catch (errors) {
        console.log(errors);
        throw errors;
    }
};


exports.getAllTasks = async () => {
    try {
        const collection = await tasksCollection.find({}).toArray();
        return collection;
    }
    catch (errors) {
        console.log(errors);
        throw errors;
    }
};

exports.getSearchUser = async (id, name, limit) => {
    try {
        let datafilters = getAllUsers();
        if (id) {
            console.log("in id");
            datafilters = usersCollection.find({ id: Number(id) }).toArray();
        }
        if (name) {
            console.log("in name");
            datafilters = usersCollection.find({ id: Number(id) }).toArray();
        }
        if (limit > 0) {
            console.log("in limit");
            datafilters = datafilters.slice(0, limit);

        }
        return datafilters;
    }
    catch (errors) {
        console.log(errors);
        throw errors;
    }
};

exports.deletetodoById = async (id) => {
    try{
        const result = await tasksCollection.findOneAndDelete({id: Number(id)}) ;
        return result;
    }
    catch(errors){
        console.log(errors);
        throw errors;
    }
};

exports.getAllTasks = async () => {
    try {
        const collection = await tasksCollection.find({}).toArray();
        return collection;
    }
    catch (errors) {
        console.error(errors);
        throw errors;
    }
};

exports.deletetodoByUserId = async (userId) => {
    try{
        const collection = await tasksCollection.deleteMany({"userId": userId});
        return collection;
    }
    catch(errors){
        console.error(errors);
        throw errors;
    }
}

exports.getAllTasksForUser = async (userId) => {
    try{
        const collection = await tasksCollection.find({"userId": userId}).toArray();
        return collection;
    }
    catch(errors){
        console.error(errors);
        throw errors;
    }
}

exports.addTasks = async (tasks) => {
    try{
        const collection = await tasksCollection.insertMany(tasks);
        return collection;
    }
    catch(errors){
        console.error(errors);
        throw errors;
    }
};

exports.updateTasks = async (tasks) => {
    try{
        console.log(`Tasks: ${tasks} id:${tasks.id}`)
        const collection = await tasksCollection.findOneAndUpdate(({id: tasks.id}),{$set: tasks}, {new:false,upsert: true,returnOriginal: true});
        return collection;
    }
    catch(errors){
        console.error(errors);
        throw errors;
    }
};
exports.updateTasksCompleted = async (tasksId, done ) => {
    try{
        console.log(`id: ${tasksId} done:${done}`)
        const collection = await tasksCollection.findOneAndUpdate(({"id": tasksId}),{ $set: { completed: done } }, {new:false,upsert: true,returnOriginal: true});
        console.log(`updateTasksCompleted Result: ${JSON.stringify(collection)}`);
        return collection;
    }
    catch(errors){
        console.error(errors);
        throw errors;
    }
};
