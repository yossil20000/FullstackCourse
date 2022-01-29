const fileSystems = require("fs").promises;
const fileDb = "./data.json";

async function  getAllUsers() {
    try
    {
/*         await fileSystems.readFile("./Server/Data/data.json",(err,result) =>{
            const data = JSON.parse(result.data);
            console.log(data);
            return data; 
        }); */
        const data = await fileSystems.readFile(fileDb,"utf-8");
        return JSON.parse(data);
    }
    catch(err)
    {
        console.error(err);
    }
     
}
async function deleteUser(id) {
    try{
        let data = await getAllUsers();
        data = data.filter(item => item.id != id);
        await fileSystems.writeFile(fileDb,JSON.stringify(data));
        return data;
    }
    catch(err){
        console.error(err);
    }
}
module.exports = {
    getAllUsers: getAllUsers,
    deleteUser: deleteUser
}
