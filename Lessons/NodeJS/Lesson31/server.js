// like import
const http = require("http")

//Create Server
const server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-type" : "text/html"});
    res.write("<h1>Hello Node.js!!!</h1>");
    //finish the response
    res.end(); 
});

//Define wich port to listen
server.listen(3000);
// http://127.0.0.1:3000/
