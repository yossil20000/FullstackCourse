const http = require("http");

const server = http.createServer(
    (req,res) => {
        res.writeHead(200,{"content-type" : "text/html"});
        res.write(`<h1>Hello from Serever2 ${process.argv[2]}`);
        res.write("<h1>Hello from Serever2");
        res.end;
    }
)
server.listen(8888);
console.log("run rnnbb")