import 'regenerator-runtime/runtime';
import axios from 'axios';
import userItem from "./Models/user"; 

const BASE_URL = 'http://127.0.0.1:3000';
const getTodoItems = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/placeholder`);
        const todoItems = response.data.data;
        console.log(`GET: Here's the list of todos`,todoItems);
        return todoItems;
    }
    catch(errors){
        console.error(errors);
    }
}
const createTodoElement = item => {
    const todoElement = document.createElement('li');
    todoElement.id = item.id;
    todoElement.appendChild(document.createTextNode(item.name));
    todoElement.onclick = async event => await removeTodoElement(event,todoElement);
    return todoElement;
}
const updatetodoList = todoItems => {
    const todoList = document.querySelector('ul');
    if(Array.isArray(todoItems) && todoItems.length > 0){
        todoItems.map(todoItem => {
            todoList.appendChild(createTodoElement(todoItem));
        })
    } else if(todoItems){
        todoList.appendChild(createTodoElement(todoItems));
    }
};
const main = async () => {
    updatetodoList(await getTodoItems());
};

const form = document.querySelector('form');
form.addEventListener('submit', async event => {
    event.preventDefault();
    const title = document.querySelector('#new-todos__title').value;
    const username = document.querySelector('#new-todos__username').value;
    const email = document.querySelector('#new-todos__email').value;
    /* const todo = {
    Id:1,
    name: title,
    username: "fff"
    }; */
    //let todo = eval("(" + userItem + ")");
/*     let todo = {
        id: "",
        name:"",
        username:""

    } */
    
    userItem.id;
    //let userItem1 = {id:0,name:"",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}}
    userItem.id = 46;
    userItem.name = title;
    userItem.username = username;
    userItem.email = email;
    console.log("To do: ",userItem);
    const submitTodoItem = await addTodoItem(userItem);
    updatetodoList(submitTodoItem);
});

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