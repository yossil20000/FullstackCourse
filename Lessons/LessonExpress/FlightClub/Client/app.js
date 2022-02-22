import 'regenerator-runtime/runtime';
import axios from 'axios';
//import userItem from "./Models/user.js";
//import todoitemObj from './Models/todos.js';


export const deleteId = async id => {
    try {
        console.log(`Deleted  Id ${id}`);
        
    }
    catch (errors) {
        console.error(errors);
    }
};

export const updateItem= async (itemId, done) => {
    try {
       
        //const response = await axios.put(url);
        console.log(`updateTodoItemComplete ${itemId}`);
        //return response.data;

    }
    catch (errors) {
        console.error(errors);
    }
};

function getId(id) {
    let ids = id.split('-');
    if (ids.length == 2)
        return ids[1];
    else
        return id[0];
}
function getItemByElementid(list, elementId) {
    const itemId = getId(elementId);
    const item = list.find((item) => {
        return item.id == itemId;
    });
    return item;
}
function getItemByid(list, id) {

    const item = list.find((item) => {
        return item.id == id;
    });
    return item;
}

async function OnEdit(id) {


}
async function OnDelete(e) {
    console.log(`OnDelete ItemId: ${e}`);

}







async function updateUsersSelect(usersList) {
    const userSelectElement = document.getElementById('select-filter');
    userSelectElement.innerHTML = "";
    userSelectElement.onchange = event => OnFilterChanged(event);
    let userListReduced = findUniqUsersId(usersList);
    console.log(userListReduced);
    Object.values(userListReduced).forEach((item) => {
        if (item.email == undefined) {
            console.error(`Item: ${item.id} Corupted`);
        }
        else {
            const optionElement = addUser(item);
            userSelectElement.appendChild(optionElement);
        }

    });
    console.log(`UpdateSelected current Selected id : ${userSelectElement.value}`);
    return userSelectElement.value;

}
function findUniqUsersId(arr) {
    const arrOfId = arr.map((object) => object.id);
    const uninqId = [...new Set(arrOfId)];
    let newUsers = arr.reduce(reducer, {});

    console.log(`newUsers Origiancount:${arr.length} ${newUsers.length}`, newUsers)
    //console.log(uninqId);
    return newUsers;
}
function reducer(acc, cur) {
    return { ...acc, [cur.email]: cur }
}

function getCompletedTask(comparare)
{
    return todoList.filter((item) => {
        return comparare( item.completed);
    });
}
function IsFalse(item){
    return String(item) == 'false' || item == false 
}

 function IsTrue(item){
    return String(item) == 'true' || item == true 
}




const main = async () => {
    /* const response = await Promise.all(
        [getTodoItems(), getUsers()]
    );
    todoList = response[0];
    usersList = response[1]; */
   /*  const todo = document.getElementById("addTodo");
    todo.onclick = async event => OnAddItem(event);
    let  element = document.getElementById('btn-filter-completed');
    element.onclick = async () => OnFilterCompleted(IsTrue);
    element = document.getElementById('btn-filter-uncompleted');
    element.onclick = async () => OnFilterCompleted(IsFalse);
    element = document.getElementById('btn-filter-all');
    element.onclick = async () => OnFilterCompleted((item) => true);
    
    
    element = document.getElementById('btn-sort');
    element.onclick = async () => OnSortBy();

    const selectedUser = await updateUsersSelect(usersList);
    await updatetodoList(todoList, selectedUser); */

};
main();