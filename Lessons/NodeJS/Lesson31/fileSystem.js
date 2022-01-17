//Import file system
const fs = require("fs");
const http = require("http");
const eol = require("eol");
//Create Server
const server = http.createServer((req,res) =>{
    
    fs.readFile("lesson.txt",'utf-8',(err, fileContent) =>{

        if(err)
    {
        res.writeHead(500,{"Content-type" : "text/html"});
        res.write(err);
        
    }
        else{
            console.log(fileContent);
            res.writeHead(200,{"Content-type" : "text/html"});
            let lines = eol.split(fileContent);
            //res.write(fileContent);
            lines.forEach(element => {
                res.write(element);
                res.write("<br>");
            });
        }
        res.end(); 
        //finish the response
    });

    
    
    
    
});

//Define wich port to listen
server.listen(3000);



fs.readFile("lesson.txt",'utf-8',(err, fileContent) =>{

    if(err)
    console.log(err);
    else{
        console.log(fileContent);
    }
});

fs.mkdir("./files", (err) =>{
    err ? console.log(err) : console.log("Dir updated");
});
fs.writeFile("./files/file.txt","fileSystem package writer to you", (err) =>
{
    err ? console.log(err) : console.log("File updated");
}); 
