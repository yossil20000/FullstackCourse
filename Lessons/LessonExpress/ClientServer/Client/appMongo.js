import 'regenerator-runtime/runtime';
import axios from 'axios';
import userItem from "./Models/user.js";
import todoitemObj from './Models/todos.js';

const BASE_URL = 'http://127.0.0.1:3000/db';
const URL_TODOS_GET = `${BASE_URL}/tasks`;
const URL_USERS_SEARCH = `${BASE_URL}/users/search?`;
const URL_USERS_GET_ALL = `${BASE_URL}/users`;

function getUserSearchURL(id, name, limit) {
    let url = `${URL_USERS_SEARCH}`
    let addAt = false;
    if (name) {

        addAt = true;
        url += `&name=${name}`;

    }

    if (id) {
        if (addAt) {
            url += "&";
        }
        addAt = true;
        url += `&id=${id}`;
    }
    if (limit) {
        if (addAt) {
            url += "&";
        }
        addAt = true;
        url += `&limit=${limit}`;
    }
    return url;
};
function getTaskForUserUrl(userId) {
    return `URL_TODOS_GET/user/${userId}`;
}

let todoList;
let usersList;

const getTodoItems = async () => {
    try {
        const response = await axios.get(`${URL_TODOS_GET}`);
        const todoItems = response.data.data;
        console.log(`GET: Here's the list of todos`, todoItems);
        return todoItems;
    }
    catch (errors) {
        console.error(errors);
    }
}
const getUsers = async () => {
    try {
        const response = await axios.get(URL_USERS_GET_ALL);
        const usersItems = response.data.data;
        console.log(`GET: Here's the list of todos`, usersItems);
        return usersItems;
    }
    catch (errors) {
        console.log(errors);
    }
}

export const addTodoItem = async todo => {
    try {

        console.log(todo);
        const response = await axios.post(`${URL_TODOS_GET}`, {});
        const newTodoItem = response.data;
        console.log(`added new item!`, newTodoItem);
        return newTodoItem;
    } catch (errors) {
        console.error(errors);
    }
};

export const deleteTodoItem = async id => {
    try {
        const response = await axios.delete(`${URL_TODOS_GET}/${id}`);
        console.log(`Deleted Todo Id ${id}`);
        return response.data;

    }
    catch (errors) {
        console.error(errors);
    }
};

export const deleteTodoItemForUser = async userId => {
    try {
        const response = await axios.delete(getTaskForUserUrl(userId));
        console.log(`Deleted Todo Id ${id}`);
        return response.data;

    }
    catch (errors) {
        console.error(errors);
    }
};

/* export const updateTodoItem = async (item) => {
    try {
        const response = await axios.put(URL_TODOS_GET, item);
        console.log(`Deleted Todo Id ${id}`);
        return response.data;

    }
    catch (errors) {
        console.error(errors);
    }
}; */
export const updateTodoItem = async (item) => {
    try {
        const url = `${URL_TODOS_GET}`;
        let sendItem = JSON.stringify(item);
        console.log("item: ", sendItem);
        console.log(sendItem);
        console.log("UpdateCpleted URL", url)
        const response = await axios.put(url, item, { crossdomain: true });
        console.log(`updateTodoItemComplete ${response}`);
        return response.data;

    }
    catch (errors) {
        console.error(errors);
    }
};
export const updateTodoItemComplete = async (itemId, done) => {
    try {
        const url = `${URL_TODOS_GET}/${itemId}/completed?done=${done}`;
        console.log("UpdateCpleted URL", url)
        const response = await axios.put(url);
        console.log(`updateTodoItemComplete ${itemId}`);
        return response.data;

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
function getItemByElementid(elementId) {
    const itemId = getId(elementId);
    const item = todoList.find((item) => {
        return item.id == itemId;
    });
    return item;
}
function getItemByid(id) {

    const item = todoList.find((item) => {
        return item.id == id;
    });
    return item;
}

async function OnEdit(id) {
    console.log(`On Edit ItemId: ${id}`);
    const newTitle = document.getElementById('input-todo').value;
    if (newTitle == "") {
        document.getElementById('input-todo').value = "Error Please enter title";
        return;
    }
    let currentItem = getItemByid(id);
    let editedItem = todoitemObj;
    editedItem.id = currentItem.id;

    editedItem.title = document.getElementById('input-todo').value;
    editedItem.userId = getActiveUser();
    editedItem.completed = currentItem.completed;
    console.log(editedItem);
    await updateTodoItem(editedItem);
    await GetRefreshActiveUserTaskDisplay();

}
async function OnDelete(e) {
    console.log(`OnDelete ItemId: ${e}`);
    await deleteTodoItem(e);
    await GetRefreshActiveUserTaskDisplay();
}
async function OnFilterChanged(event) {
    console.log(`OnFilterChanged ${event.target.value}`);
    await updatetodoList(todoList, event.target.value);
}
async function OnAddItem(e) {
    const newItem = document.getElementById('input-todo');
    const newItemObj = todoitemObj;
    newItemObj.title = newItem.value;
    newItemObj.userId = getActiveUser();
    newItem.value = "";
    console.log(newItemObj);
    await addTodoItem(newItemObj);
    await GetRefreshActiveUserTaskDisplay();
    
}
async function OnCompletedChanged(id) {
    console.log(`OnClik ItemId: ${id}`)

    const item = getItemByid(id);
    console.log('Current Item', item);
    if (item) {
        console.log('Current Item complete', item.completed);
        item.completed = item.completed == 'true' ? 'false' : 'true';
        console.log('Item complete', item.completed);
        await updateTodoItemComplete(id, item.completed);
        console.log('after change', item);
        //toggleCompletedElement(item);
        await GetRefreshActiveUserTaskDisplay();
    }


}
function toggleCompletedElement(item) {
    let actionCompleted = document.getElementById(`btComplete-${item.id}`);
    actionCompleted.innerHTML = "";

    if (item.completed === 'false') {
        actionCompleted.insertAdjacentHTML("beforeend", `<i  class="fa fa-fw fa fa-times-circle" style="color: orange;"></i>`);
    }
    else {

        actionCompleted.insertAdjacentHTML("beforeend", `<i  class="fa fa-fw fa fa-check" style="color: green;"></i>`);
    }
}
function getCompletedElement(item) {
    let actionCompleted = document.createElement('button');
    actionCompleted.className = 'action-btn';
    actionCompleted.id = `btComplete-${item.id}`;
    //if (String(item.completed) == 'true' || item.completed == true) {
    if(IsTrue(item.completed))
    {
        actionCompleted.insertAdjacentHTML("beforeend", `<i  class="fa fa-fw fa fa-check" style="color: green;"></i>`);
    }
    else {
        actionCompleted.insertAdjacentHTML("beforeend", `<i  class="fa fa-fw fa fa-times-circle" style="color: orange;"></i>`);

    }


    actionCompleted.onclick = async () => await OnCompletedChanged(item.id);
    return actionCompleted;
}
const createTodoElement = (item) => {

    const todoElement = document.createElement('div');

    todoElement.id = `todo-${item.id}`;
    todoElement.className = "todo__items_item border";
    const itemCompleteElement = document.createElement('div');
    itemCompleteElement.className = "item-complete border";

    let element = document.createElement('div');
    element.innerText = "Completed:";
    itemCompleteElement.appendChild(element);

    /* element = document.createElement("lable");
    element.className = "custom-checkbox";
    element.id = `completed-${item.id}`;
    let inputElement = document.createElement("input");
    inputElement.id = `checkbox-${item.id}`;
    inputElement.type = "checkbox";
    inputElement.onclick = async event => await OnCompletedChanged(event);
    element.appendChild(inputElement); */
    const actionCheck = getCompletedElement(item);
    element.appendChild(actionCheck);


    itemCompleteElement.appendChild(element);
    todoElement.appendChild(itemCompleteElement);


    const innerTitleHtml = `<div class="item-title">${item.title}</div>`;
    todoElement.insertAdjacentHTML("beforeend", innerTitleHtml);

    const itemAction = document.createElement('div');
    itemAction.className = "item-actions border";
    let actionEdit = document.createElement('button');
    actionEdit.className = 'action-btn';
    actionEdit.id = `edit-${item.id}`;
    actionEdit.insertAdjacentHTML("beforeend", `<i id="edit-${item.id}" class="fas fa-pencil-alt" style="color: royalblue;"></i>`);

    actionEdit.onclick = async event => await OnEdit(item.id);
    itemAction.appendChild(actionEdit);
    actionEdit = document.createElement('button');
    actionEdit.className = 'action-btn';
    actionEdit.id = `delete-${item.id}`;
    actionEdit.insertAdjacentHTML("beforeend", `<i id="delete-${item.id}" class="fas fa-trash-alt" style="color:red"></i>`);

    actionEdit.onclick = async event => await OnDelete(item.id);
    itemAction.appendChild(actionEdit);

    todoElement.appendChild(itemAction);

    return todoElement;
}

function getActiveUser() {
    // const todoList = document.getElementById('select-filter');
    //    var opt = todoList.options[todoList.selectedIndex];

    return document.getElementById('select-filter').value;

}
const updatetodoList = async (todoItems, selectedUser) => {
    console.log(`UpdatedTodoList userId ${selectedUser}`);
    const todoList = document.getElementsByClassName('todo__items_list');
    todoList[0].innerHTML = "";
    if (Array.isArray(todoItems) && todoItems.length > 0) {
        todoItems.map(todoItem => {
            console.log(`map userId : ${todoItem.userId}`);
            if (todoItem.userId == Number(selectedUser)) {
                console.log(`Append child : ${JSON.stringify(todoItem)}`)
                todoList[0].appendChild(createTodoElement(todoItem));
            }
        })
    } /* else if (todoItems) {
        todoList.appendChild(createTodoElement(todoItems));
    } */
};






const removeTodoElement = async (event, element) => {
    event.target.parentElement.removeChild(element);
    const id = element.id;
    await deleteTodoItem(id);
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

function addUser(item) {

    const optionElement = document.createElement('option');
    optionElement.value = item.id;
    optionElement.innerText = `${item.email} (${item.name})`;
    return optionElement;

}function getCompletedTask(comparare)
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


async function OnFilterCompleted(completed){
    const completedTask = getCompletedTask(completed);
    await RefreshActiveUserTaskDisplay(completedTask);
}

async function RefreshActiveUserTaskDisplay(updatedList){

    const activeUser = getActiveUser();
    await updatetodoList(updatedList, activeUser);
}
async function GetRefreshActiveUserTaskDisplay(){

    const activeUser = getActiveUser();
    const response = await Promise.all(
        [getTodoItems()]
    );
    /* todoList =await getTodoItems(); 
    usersList = await  */
    todoList = response[0];
    await updatetodoList(todoList, activeUser);
}


const main = async () => {
    const response = await Promise.all(
        [getTodoItems(), getUsers()]
    );
    /* todoList =await getTodoItems(); 
    usersList = await  */
    todoList = response[0];
    usersList = response[1];
    const todo = document.getElementById("addTodo");
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
    await updatetodoList(todoList, selectedUser);

};
main();