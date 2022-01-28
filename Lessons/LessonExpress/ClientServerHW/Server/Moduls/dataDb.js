const fileSystems = require("fs").promises;


async function  getAllUsers() {
    try
    {
/*         await fileSystems.readFile("./Server/Data/data.json",(err,result) =>{
            const data = JSON.parse(result.data);
            console.log(data);
            return data; 
        }); */
        const data = await fileSystems.readFile("./data.json","utf-8");
        return JSON.parse(data);
    }
    catch(err)
    {
        console.error(err);
    }
     
}
module.exports = {
    getAllUsers: getAllUsers
}