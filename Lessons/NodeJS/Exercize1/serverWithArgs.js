const writter = require("./Libs/writeToFile.js");
console.log("start");
writter.writeToFile("myData.txt", `Name: ${process.argv[2]} ,Address: ${process.argv[3]}`);
console.log("Writing");