// (A) LOAD FILE SYSTEM MODULE
// https://nodejs.org/api/fs.html
const fs = require("fs");

// (B) WRITE TO FILE
fs.writeFile("demo.txt", "CONTENT", "utf8", (error, data) => {
  console.log("Write complete");
  console.log(error);
  console.log(data);
});

/* (C) READ FROM FILE
fs.readFile("demo.txt", "utf8", (error, data) => {
  console.log("Read complete");
  console.log(error);
  console.log(data);
});
*/
