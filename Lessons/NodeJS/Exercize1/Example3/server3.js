const http = require("http");

const server = http.createServer((req,res) => {
    res.writeHead(200,"content-type": "text/html");
    res.write(`<p>Name: ${process.argv[2]} Number:${process.argv[3]}</p>`);
    res.end();
});
    

server.listen(8888);
