const axios = require("axios").default;
const eol = require("eol");

const app = require("http");

const server = app.createServer((req,res) => {
   
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
        function(response){
            res.writeHead(200,{"Content-type" : "text/html"});
            console.log(JSON.parse(JSON.stringify(response.data)));
           // res.write(JSON.parse(JSON.stringify(response.data)));
           res.write("Writting JSON");
           // res.end(); 
           let lines = eol.split(JSON.parse(JSON.stringify(response.data)));
            //res.write(fileContent);
            lines.forEach(element => {
                res.write(element);
                res.write("<br>");
            }); 
            res.end(); 
        }
    );
});
server.listen(3002,() => "Server is running");