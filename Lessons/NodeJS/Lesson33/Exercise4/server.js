const http = require("http");
const fetch = require("./Lib/copyPlaceHolder");
const port = process.env.port || 3000;
const url = "https://jsonplaceholder.typicode.com/users";
const server = http.createServer((req,res) => {
     
    const body = "<h1>Hello 1</h1>";
    fetch.GetFromPlaceHolderAsync(url).then(
         response => {
            var data = JSON.parse(JSON.stringify(response.data));
             console.log(data);
             //res.writeHead(200,{'Content-Type': 'application/json' }); 
             res.writeHead(200,{'Content-Type': 'text/html' }); 
            //res.write(JSON.stringify(data[0]));
            res.write(JsonToHtml(data));
            res.end();
         }
     ).catch(err => {
         console.log(err);
     });
    
    /*  res.setHeader('Content-Length', Buffer.byteLength(body));
     res.setHeader('Content-Type' ,'text/html');
     res.setHeader('X-Foo', 'bar'); */
     /* res.writeHead(200,{
         'Content-Length': Buffer.byteLength(body),
         'Content-Type': 'text/html'
     }); */
     /* res.writeHead(200,'Content-Type','text/plain');
     const headers = res.getHeaders();
     console.log(headers);
     res.end(body); */
});

server.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
})

function JsonToHtml(data){
    /* const ul = window.document.createElement("ul");
    /*let li = document.createElement("li");
    li.innerText = json.id;
    ul.appendChild(li);
    li.innerText = json.name;
    ul.appendChild(li); */
    let ul = "<h1>hello Yossi</h1><h2>Data From PlaceHolder</h2>"
    data.forEach(json => {
        ul+= `<ul><li>${json.id}</li><ul><li>${json.name}</li><li>${json.username}</li><li>${json.email}</li><li>${json.address.city}</li></ul></ul>`
    });
    
    return ul;

}