

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
  
function DrawOnClick(e)
{
  DrawOnClickImp(e.target,true);
}
function DrawOnClickImp(element,showMore){
  let uId = element.getAttribute("data-userId");
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

        element.appendChild(todo);
      }
      else{
        element.innerHTML ="";
        element.innerHTML = user[0].name;
      }

  });
  });
  

  
  console.log(element.getAttribute("data-userId"));
  /* e.target.innerHTML = "" */
  
}

function UserShowMore(e)
{
  let uId = e.target.getAttribute("data-userId");
  /* let element = document.getElementsByTagName('li').find(item => {
    let att = item.getAttribute('data-userId');
    return att == 
  }) */
  let element = document.getElementsByClassName(`userId-${uId}`);
  e.target.classList.toggle("hide");
  DrawOnClickImp(element);
}
const containerUser = document.getElementById("containerUsers");
function DrawUsers(users){
  containerUser.innerHTML = "";
  let userUl = document.createElement('ul');
  userUl.id="userList";
  users.forEach(elementUser => {
    let li = document.createElement("li");
    /* let btn = document.createElement('button');
    btn.setAttribute("data-userId", elementUser.id);
    btn.addEventListener('click',UserShowMore); */
    li.setAttribute("data-userId", elementUser.id);
    
    li.innerHTML = `<button  onClick="UserShowMore" data-userId=${elementUser.id}>Show More =: </button> <span onClick="DrawOnClick" data-userId=${elementUser.id} >${elementUser.name}</span> <span class=hide>&lt;Mail: ${elementUser.email}&gt;&lt;City:${elementUser.address.city}&gt; &lt;Phone:${elementUser.phone}&gt;</span>`;
    /* li.addEventListener('click', DrawOnClick); */
    userUl.appendChild(li);
  });
  containerUser.appendChild(userUl);
}






