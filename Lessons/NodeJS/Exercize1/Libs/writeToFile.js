const fileWritter = require("fs");
let writeToFile = function(file,content){
    try
    {
        return fileWritter.appendFileSync(file,content);
    }
    catch(err)
    {
        console.log(`Writing error ${err}`);
        return err;
    }
}

module.exports = {
    writeToFile: writeToFile
}