//https://stackoverflow.com/questions/69150882/how-to-await-fs-readfile
const rd = require("./Libs/textFileModule.js");
const split = require("./Libs/strToArray.js");
const findInArray = require("./Libs/findInArr.js");
const fileName = "C:\\Users\\Yossil\\Documents\\Repos\\FullstackCourse\\Lessons\\NodeJS\\Exercize1\\Data\\list.txt";
//const { Log } = require("./Libs/logs.js");
const logs = require("./Libs/logs.js");
logs.Log.called = "server.js";



let data = rd.readFile(fileName,(data) =>{
    logs.Log.info(`Data readFile: ${data}`);

});
(async () => {
    let data =await rd.readFileAsync(fileName);
    logs.Log.info(`Data readFileAsync: ${data}`);
})();

(
    async () => {
        logs.Log.info(`Start Test`);
        let data = await rd.readFilePromiss(fileName);
        logs.Log.info(`Data  readFilePromiss  ${data}`);
        data = rd.readFileSync(fileName);
        logs.Log.info(`Data  readFileSync  ${data}`);
        let splited = split.strToArray(data);
        let name = "BB";
        let foundIndex = findInArray.findInArray(splited,name);
        logs.Log.info(`Data  Promiss after split ${splited}`);
        logs.Log.info(`find in array for ${name} index = ${foundIndex}`);
        name = "AB";
        foundIndex = findInArray.findInArray(splited,name);
        logs.Log.info(`find in array for ${name} index = ${foundIndex}`);
        logs.Log.info(`end Test`);
    }
)();



/* logs.Log.error(`${logs.From}:  from server`); */
