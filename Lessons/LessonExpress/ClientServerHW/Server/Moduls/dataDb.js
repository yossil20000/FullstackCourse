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
        
        console.log(data);
        data = data.filter(item => item.id !== Number(id));
        await fileSystems.writeFile(fileDb,JSON.stringify(data));
        return data;
    }
    catch(err){
        console.error(err);
    }
}
async function updateUser(user){
    try{
        let data = await getAllUsers();
        const dataUpdate = data.map((item) => {
            if(item.id === user.id)
            {
                item = user;
                return item
            }
            return item;
        })
        await fileSystems.writeFile(fileDb,JSON.stringify(dataUpdate));
        return dataUpdate;
    }
    catch(err){
        console.error(err);
    }
}
async function addUser(item){
    try{
        let data = await getAllUsers();
        console.log(`Data from file id:${item.id} data.id:${data[0].id}:\n`);
        const find =  data.find((user) => user.id === Number(item.id));
        
        if(find){
            console.log(`AddUser Found: ${find.id} `);
            return `{"Success": false,"Message":${find.id} Already Exist }`
        }
        else{
            
            console.log(`AddUser Not Found: ${find} `);
            data.push(item);
            await fileSystems.writeFile(fileDb,JSON.stringify(data));
            return item;
        }
        //data.push(item);
        
        //await fileSystems.writeFile(fileDb,JSON.stringify(data));
        
    }
    catch(err){
        console.error(err);
    }
}
module.exports = {
    getAllUsers: getAllUsers,
    deleteUser: deleteUser,
    addUser:addUser,
    updateUser : updateUser
}
