//https://stackoverflow.com/questions/69150882/how-to-await-fs-readfile
const rd = require("./Libs/textFileModule.js");
const split = require("./Libs/strToArray.js");
const findInArray = require("./Libs/findInArr.js");
const fileName = "C:\\Users\\Yossil\\Documents\\Repos\\FullstackCourse\\Lessons\\NodeJS\\Exercize1\\Data\\list.txt";
const { Log } = require("./Libs/logs.js");
Log.called = "server.js";
let data = rd.readFile(fileName,(data) =>{
    logs.Log.info(`Data read: ${data}`);

});
(async () => {
    let data =await rd.readFileAsync(fileName);
    logs.Log.info(`Data read Async: ${data}`);
})();

(
    async () => {
        let data = await rd.readFilePromiss(fileName);
        let splited = split.strToArray(data);
        let name = "BB";
        let foundIndex = findInArray.findInArray(splited,name);
        logs.Log.info(`Data Read Promiss after split ${splited}`);
        logs.Log.info(`find in array for ${name} index = ${foundIndex}`);
        name = "AB";
        foundIndex = findInArray.findInArray(splited,name);
        logs.Log.info(`find in array for ${name} index = ${foundIndex}`);
    }
)();
const logs = require("./Libs/logs.js");


/* logs.Log.error(`${logs.From}:  from server`); */
