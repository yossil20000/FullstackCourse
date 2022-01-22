const { rejects } = require("assert");
const fileReader = require("fs");
const fileReaderPromiss = require("fs/promises");
const logger = require("./logs");
let readFile =  function(file,callback){
    let lines="";
    fileReader.readFile(file, 'utf-8', (err, data) => {
        if (err == null) {
            logger.Log.info(`Data read: ${data}`);
           callback(data);
        }


        else
            callback("");
    });
    
    
};
let readFileAsync = async function(file ,callback){
    return data = await fileReaderPromiss.readFile(file,"utf-8")
}

let readFilePromiss = (file) =>{
    return new Promise((resolve,rejects) =>{
        fileReader.readFile(file,"utf-8",(error,data) =>{
            resolve(data);
        });
    });
};

module.exports ={
    readFile: readFile,
    readFileAsync : readFileAsync,
    readFilePromiss : readFilePromiss
};