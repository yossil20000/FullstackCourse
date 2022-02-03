
const jsonfile = require('jsonfile');
var path = require('path');

const fileDb = path.resolve("data","users.json");

async function  getAllUsers() {
    try
    {
        const data = await jsonfile.readFile(fileDb);
        return data
    }
    catch(err)
    {
        console.error(err);
    }
     
}
async function  getAllUsersByfilter(id,name,limit) {
    try
    {
        const data = await jsonfile.readFile(fileDb);
        let datafilters = [...data];
        //console.log(datafilters);
        if(id)
        {
            console.log("in id");
            datafilters = data.filter((item) => Number(item.id) === Number(id));
        }
        if(name)
        {
            console.log("in name");
            datafilters = datafilters.filter((item) => item.name.toUpperCase() == name.toUpperCase());
        }
        if(limit> 0)
        {
            console.log("in limit");
            datafilters = datafilters.slice(0, limit);
  
        }
        //console.log(datafilters);
        return datafilters;
    }
    catch(err)
    {
        console.error(err);
    }
     
}
async function deleteUser(id) {
    try{
        let data = await getAllUsers();
        const dataFilterd = data.filter( (item => item.id != id));

        console.log(dataFilterd.length);
        if(data.length != dataFilterd.length)
        {
            await jsonfile.writeFile(fileDb,dataFilterd);
            return id;
        }
        return 0;
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
        await jsonfile.writeFile(fileDb,dataUpdate);
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
        //const find =  data.find((user) => user.id === Number(item.id));
        
        if(false){
            console.log(`AddUser Found: ${find.id} `);
            return `{"Success": false,"Message":${find.id} Already Exist }`
        }
        else{
            
           data.sort( (left, right) => Number(left.id) < Number(right.id) );
            
           const nextId = Number(data[data.length -1].id) + 1;
            console.log("next Id ", nextId);
            item.id = nextId;  
            console.log("nextIf", nextId);
            item.id = nextId;
            data.push(item);
            await jsonfile.writeFile(fileDb,data);
            return `{"Success": true,"Message":${item.id} Added }`
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
    updateUser : updateUser,
    getAllUsersByfilter : getAllUsersByfilter
}
