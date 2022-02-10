const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://localhost:27017/';
const DBname = "todolist";
let tasksCollection;
let usersCollection;
mongoClient.connect(connectionUrl,(error,client) => {
    if(error){
        console.error("Un able to connect to database", error);
    }
    console.log("mongo connected");
    const db = client.db(DBname);
     db.collection("tasks").findOne({}, function(err,res){
        console.log(res);
    });
    usersCollection = db.collection("users");
    
    db.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        
      });
    //mongo db method
    //readAllTasks();

});

  function readAllTasks() {
    try{
            const collection =  usersCollection.find().toArray();
            return collection;
    }
    catch(err){
        console.error(err);
    }
};
//readAllTasks()
/* 
(
    async () => {
        const tasks = await readAllTasks();
        console.log(tasks);
    }
    
)();
 */