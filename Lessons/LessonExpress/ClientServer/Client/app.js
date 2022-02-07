import 'regenerator-runtime/runtime';
import axios from 'axios';
import userItem from "./Models/user.js"; 
import todoitem from './Models/todos.js';

const BASE_URL = 'http://127.0.0.1:3000';
const BASE_TODOS_URL = `${BASE_URL}/todos`;
const TODOS_GET = `${BASE_TODOS_URL}/`;
const TODOS_SEARCH = `${BASE_TODOS_URL}/search/`;
let todoList;
const getTodoItems = async () => {
    try{
        const response = await axios.get(`${BASE_TODOS_URL}/`);
        const todoItems = response.data.data;
        console.log(`GET: Here's the list of todos`,todoItems);
        return todoItems;
    }
    catch(errors){
        console.error(errors);
    }
}
function getId(id){
    let ids=id.split('-');
    if(ids.length == 2)
        return ids[1];
    else
        return id[0];
}
function getItemByid(elementId){
    const itemId = getId(elementId);
    const item =todoList.find((item) => {
        return item.id == itemId;
    });
    return item;
}
 export async function OnCompletedChanged(e){
     
    console.log(`ItemId: ${e.target.id} parent:${e.target.parentElement.id} value: ${e.target.parentElement.value}` );
    e.target.parentElement.checked = true; 
    console.log(`ItemId: ${e.target.id} parent:${e.target.parentElement.id} value: ${e.target.parentElement.value}` );
    e.target.checked = true;
    console.log(`i checked: ${e.target.checked}`);
}
async function OnEdit(e){
    console.log(`On Edit ItemId: ${e.target.id}`);
}
async function OnDelete(e){
    console.log(`OnDelete ItemId: ${e.target.id}`);
}

 async function OnAddItem(e){
    console.log(`OnAdd ItemId: ${e.target.id}`)
}
async function OnClick(e){
    console.log(`OnClik ItemId: ${e.target.id}`)
    console.log(`OnClik targetid: ${e.target.id} parent:${e.target.parentElement.id} value: ${e.target.parentElement.value}` );
    const item = getItemByid(e.target.parentElement.id);
    console.log('itebyId', item);
    if(item)
        item.completed = item.completed ? false : true;
    console.log('itebyId', item);
    toggleCompleted(item);
}
function toggleCompleted(item){
    let actionCompleted = document.getElementById( `btComplete-${item.id}`);
    actionCompleted.innerHTML ="";

    if(item.completed)
    {
        actionCompleted.insertAdjacentHTML("beforeend",`<i  class="fa fa-fw fa fa-times-circle" style="color: orange;"></i>`);
    }
    else{
        
        actionCompleted.insertAdjacentHTML("beforeend",`<i  class="fa fa-fw fa fa-check" style="color: green;"></i>`);
    }
}
function getCompletedElement(item){
    let actionCompleted = document.createElement('button');
    actionCompleted.className = 'action-btn';
    actionCompleted.id = `btComplete-${item.id}`;
    if(item.completed)
    {
        actionCompleted.insertAdjacentHTML("beforeend",`<i  class="fa fa-fw fa fa-times-circle" style="color: orange;"></i>`);
    }
    else{
        
        actionCompleted.insertAdjacentHTML("beforeend",`<i  class="fa fa-fw fa fa-check" style="color: green;"></i>`);
    }
    

    actionCompleted.onclick = async event => await OnClick(event);
    return actionCompleted;
}
const createTodoElement =  (item) => {
    const todo = document.getElementById("addTodo");
    todo.onclick = async event => OnAddItem(event);
    const todoElement = document.createElement('div');
    
    todoElement.id = `todo-${item.id}`;
    todoElement.className = "todo__items_item";
    const itemCompleteElement = document.createElement('div');
    itemCompleteElement.className ="item-complete";
    
    let element = document.createElement('div');
    element.innerText = "Completed:";
    itemCompleteElement.appendChild(element);

    element = document.createElement("lable");
    element.className = "custom-checkbox";
    element.id = `completed-${item.id}`;
    let inputElement = document.createElement("input");
    inputElement.id = `checkbox-${item.id}`;
    inputElement.type = "checkbox";
    inputElement.onclick = async event => await OnCompletedChanged(event);
    element.appendChild(inputElement);
    const actionCheck = getCompletedElement(item);
    element.appendChild(actionCheck);
    
    
    itemCompleteElement.appendChild(element);
    todoElement.appendChild(itemCompleteElement);


    const innerTitleHtml = `<div class="item-title">${item.title}</div>`;
    todoElement.insertAdjacentHTML("beforeend",innerTitleHtml);
    
    const itemAction = document.createElement('div');
    itemAction.className = "item-actions";
    let actionEdit = document.createElement('button');
    actionEdit.className = 'action-btn';
    actionEdit.id = `edit-${item.id}`;
    actionEdit.insertAdjacentHTML("beforeend",`<i id="edit-${item.id}" class="fas fa-pencil-alt" style="color: royalblue;"></i>`);

    actionEdit.onclick = async event => await OnEdit(event,todoElement);
    itemAction.appendChild(actionEdit);
    actionEdit = document.createElement('button');
    actionEdit.className = 'action-btn';
    actionEdit.id = `delete-${item.id}`;
    actionEdit.insertAdjacentHTML("beforeend",`<i id="delete-${item.id}" class="fas fa-trash-alt" style="color:red"></i>`);

    actionEdit.onclick = async event => await OnDelete(event);
    itemAction.appendChild(actionEdit);
   
    todoElement.appendChild(itemAction);

    return todoElement;
}

const updatetodoList =  (todoItems) => {
    const todoList = document.getElementsByClassName('todo__items_list');
    if(Array.isArray(todoItems) && todoItems.length > 0){
        todoItems.map(todoItem => {

            todoList[0].appendChild(createTodoElement(todoItem));
        })
    } else if(todoItems){
        todoList.appendChild(createTodoElement(todoItems));
    }
};

const main = async () => {
    todoList =await getTodoItems(); 
    updatetodoList(todoList);
    
};



export const addTodoItem = async todo => {
    try{
        
        console.log(todo);
        const response = await axios.post(`${BASE_URL}/placeholder`,todo);
        const newTodoItem = response.data;
        console.log(`added new item!`, newTodoItem);
        return newTodoItem;
    }catch(errors){
        console.error(errors);
    }
};

export const deleteTodoItem = async id =>{
try{
    const response = await axios.delete(`${BASE_URL}/placeholder/${id}`);
    console.log(`Deleted Todo Id ${id}`);
    return response.data;

}
catch(errors){
    console.error(errors);
}
};
const removeTodoElement = async (event,element) => {
    event.target.parentElement.removeChild(element);
    const id = element.id;
    await deleteTodoItem(id);
}
main();