const jsonfile = require("jsonfile");
const path = require("path");
const fileDb = path.resolve("data","todos.json");
const fileDbInit = path.resolve("data","todoinit.json");

async function resetData(){
    const data = await jsonfile.readFile(fileDbInit);
    console.log(data);
    await jsonfile.writeFile(fileDbInit,data);
    return data;
}
async function getAllTodos()
{
    const data = await jsonfile.readFile(fileDb);
    
    return data;
}
function filterByCompleted(data,completed){
    
    if(completed != undefined){
        
        let result = data.filter((item) => {
            return item.completed === completed;
        });
        return result;
    }
    return data;
    
}
function filterByUseid(data,userId){
    if(userId){
        return data.filter((item) => {
            return item.userId == Number(userId);
        });
    }
    return data;

}

async function gettodosfilters(completed,userId,limit)
{
    const data = await getAllTodos();
    let filterdData = filterByUseid(data,userId);
    //console.log(filterdData)
    filterdData = filterByCompleted(filterdData,completed);
   // console.log(filterdData)
    if(limit)
        filterdData = filterdData.slice(0,limit);
    return filterdData;
}

async function deletetodoById(id){
    let data = await getAllTodos();
    data = data.filter((item) => {
        return item.id != id;
    });
    await jsonfile.writeFile(fileDb , data);
    return data;
}
async function deletetodoByUserId(userid){
    let data = await getAllTodos();
    data = data.filter((item) => {
        return item.userId != userid;
    });
    await jsonfile.writeFile(fileDb , data);
    return data;
}
async function addtodo(todo){
    let data = await getAllTodos();
    const nextId = getNewIndex(data);
    console.log("Next id",nextId);
    console.log(todo)
    todo.id = nextId;
    data.push(todo);
    await jsonfile.writeFile(fileDb, data);
    return data;
}
async function updateTodo(todo){
    let data = await getAllTodos();
     data = data.map((item) => {
        if(item.id == todo.id)
        {
            item = todo;
           
        }
        return item;
    });
    await jsonfile.writeFile(fileDb, data);
    return data;
} 
function getNewIndex(data){
    if(data.length == 0)
    return 1;
    data.sort((left,right) => {
        return left < right;
    } );
    return data[data.length-1].id + 1;
}

module.exports = {
    getAllTodos: getAllTodos,
    gettodosfilters : gettodosfilters,
    deletetodoById : deletetodoById,
    addtodo : addtodo,
    updateTodo : updateTodo,
    deletetodoByUserId : deletetodoByUserId,
    resetData : resetData
}