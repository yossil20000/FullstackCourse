const { rejects } = require("assert");
const fileReader = require("fs");
const fileReaderPromiss = require("fs/promises");
const logger = require("./logs");
logger.Log.called = "textFileModule.js";
let readFile =  function(file,callback){
    let lines="";
    fileReader.readFile(file, 'utf-8', (err, data) => {
        if (err == null) {
            logger.Log.info(`Data : ${data}`);
           callback(data);
        }


        else
            callback("");
    });
    
    
};
let readFileAsync = async function(file ,callback){
   try{
    return data = await fileReaderPromiss.readFile(file,"utf-8");
   }
   catch(err)
   {
    return err;
   }
    
}

let readFilePromiss = (file) =>{
    return new Promise((resolve,rejects) =>{
        fileReader.readFile(file,"utf-8",(error,data) =>{
            resolve(data);
        });
    });
};
let readFileSync = function(file){
    try{
        return fileReader.readFileSync(file,"utf-8");
    }
    catch(err){
        return err;
    }
}
module.exports ={
    readFile: readFile,
    readFileAsync : readFileAsync,
    readFilePromiss : readFilePromiss,
    readFileSync : readFileSync
};