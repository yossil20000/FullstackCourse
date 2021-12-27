

let posts = getDataAsync(urlPosts).then( data => {
  console.log(data);
});

let post = getDataAsync(getUrlUserId(urlPosts,1)).then( data => {
  console.log(data);
});

let postForIndex = getDataAsync(getUrlItemId(urlCommnets,2)).then( data => {
  console.log(data);
});
/* let users;
users = getDataAsync(urlUsers).then( data => {
  console.log(data);
DrawUsers(data);
}); */

(
async () =>{
  let data = await getDataAsync(urlUsers);
  console.log(data);
  DrawUsers(data);
}
)(); 
  
function DrawOnClick(e){
  let uId = e.target.getAttribute("data-userId");
  let userTodoUrl = getUrlUserId(urlTodos,uId);
  let selectedUser = getUrlItemId(urlUsers,uId);
  let user;
  getDataAsync(selectedUser).then(data => {
user = data;
console.log(user);
  
  let users = getDataAsync(userTodoUrl).then(data => {
      
      let todo = document.getElementsByClassName(`userId-${user[0].id}`);

      if(todo.length == 0)
      {
        todo = document.createElement('ul');
        todo.className = `userId-${user[0].id}`;
        data.forEach(element =>{
          console.log(element);
         
          let todoItem = document.createElement('li');
          todoItem.innerText = element.title;
          todo.appendChild(todoItem);
        });

          e.target.appendChild(todo);
      }
      else{
        e.target.innerHTML ="";
        e.target.innerHTML = user[0].name;
      }

  });
  });
  

  
  console.log(e.target.getAttribute("data-userId"));
  /* e.target.innerHTML = "" */
  
}

const containerUser = document.getElementById("containerUsers");
function DrawUsers(users){
  containerUser.innerHTML = "";
  let userUl = document.createElement('ul');
  userUl.id="userList";
  users.forEach(elementUser => {
    let li = document.createElement("li");
    li.setAttribute("data-userId", elementUser.id);
    li.innerText = elementUser.name;
    li.addEventListener('click', DrawOnClick);
    userUl.appendChild(li);
  });
  containerUser.appendChild(userUl);
}






