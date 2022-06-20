const mongodb = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://localhost:27017';

const DBname = "tasks-app";

let tasksCollection;
let usersCollection;
MongoClient.connect(connectionUrl, (error, client) => {
   if (error) {
      return console.error("unable to connect to database", error)
   }
   console.log("mongo connected")
   const db = client.db(DBname)
   tasksCollection = db.collection('tasks')
   usersCollection = db.collection('users')
})

// mongoDB methods
// find ({})
// findOne ({id:"123"})
// findOneAndUpdate
// findOneAndDelete 

// v
exports.readAllTasks = async () => {
   try {
      const collection = await tasksCollection.find({}).toArray();
      return collection;
   }
   catch (error) {
      return error
   }
}

exports.getTasksByUserId = async (req) => {
   console.log(req.userId)
   try {
      const collection = tasksCollection.find({ userId: req.userId }).toArray();
      return collection;
   }
   catch (error) {
      return error
   }
}
// n 
exports.getTaskByMongoId = async (req) => {
   console.log(req.params._id)
   try {
      const collection = await tasksCollection.findOne({_id: ObjectId(req.params._id)});
      return collection;
   }
   catch (error) {
      return error
   }
}

// n 
// withParams
exports.getTasksByUserIdParams = async (req) => {
   try {
      const collection = await tasksCollection.find({ userId: Number(req.params.userId) }).toArray();
      return collection;
   }
   catch (error) {
      return error
   }
}

exports.getRecentTasks = async () => {
   try {
      const collection = await tasksCollection.find({}).toArray();
      let recentTasks = collection.slice(-3);
      return recentTasks;
   }
   catch (error) {
      return error
   }
}

exports.editTaskTitleById = async (req) => {
   try {
       query = { id: req.id };
      console.log(query)
      await tasksCollection.findOneAndUpdate({ id: req.id }, { $set: { title: req.title } })
      return "updated!";
   }
   catch (err) {
      console.log(`err from update`, err)
   }
}

exports.addTask = async (newTask) => {
   console.log(newTask)
   try {
      const collection = await tasksCollection.insertOne({ newTask })
      // const collection = tasksCollection.find({}).toArray();
      return collection
   }
   catch (err) {
      console.log(`err`, err)
   }
}

exports.removeTaskById = async (req) => {
   try {
      await tasksCollection.findOneAndDelete({ id: req.id })
      return 'deleted'
   }
   catch (err) {
      console.log(`err from update`, err)
   }
}



