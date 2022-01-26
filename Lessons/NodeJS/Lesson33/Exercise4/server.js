const http = require("http");
const fetch = require("./Lib/copyPlaceHolder");
const writeFile = require("fs");
const port = process.env.port || 3000;
const url = "https://jsonplaceholder.typicode.com/users";
const fileName = "./placeholder.txt";
var index=0;
const server = http.createServer((req,res) => {
     
    
    if(writeFile.existsSync(fileName))
    {
        console.log("file exist");
        res.writeHead(200,{'Content-Type': 'text/html' }); 
        //res.write(JSON.stringify(data[0]));
        
        let readData = writeFile.readFileSync(fileName,{encoding:'utf8', flag:'r'});
        console.log("Data after read");
        console.log(readData);
        res.write(`<h1>Read From file: ${fileName} Iteration:${index++}</h1>`)
        res.write(JsonToHtml(JSON.parse(readData)));
        res.end();
    }
    else
    {
        index=0;
        fetch.GetFromPlaceHolderAsync(url).then(
            response => {
               var data = JSON.parse(JSON.stringify(response.data));
                console.log(data);
                //res.writeHead(200,{'Content-Type': 'application/json' }); 
                res.writeHead(200,{'Content-Type': 'text/html' }); 
               //res.write(JSON.stringify(data[0]));
               writeFile.writeFileSync(fileName,JSON.stringify(response.data));
               res.write(`<h1>Read From URL: ${url}</h1>`);
               res.write(JsonToHtml(data));
               res.end();
            }
        ).catch(err => {
            console.log(err);
        });
    }
   
    
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