function getAllTasks() {
  fetch("http://localhost:3000/getAllTasks")
    .then((data) => {
      console.log("data", data)
      return data.json();
    })
    .then((res) => {
      console.log("res", res)
      for (i = 0; i < res.length; i++) {
        let tr = document.createElement('tr');
        Object.values(res[i]).forEach(val => {
          var td = document.createElement('td');
          td.textContent = val
          tr.appendChild(td)
        })
        let divEl = document.getElementsByClassName("tbody")[0];
        divEl.appendChild(tr)
      }
    })
    .catch((err) => {
      console.log(err);
    })
}



function getAllTasks() {
  fetch("http://localhost:3000/getAllTasks")
    .then((data) => {
      console.log("data", data)
      return data.json();
    })
    .then((res) => {
      console.log("res", res)
      let divEl = document.getElementsByClassName("tbody")[0];
      divEl.innerHTML = "";
      res.forEach((element) => {
        divEl.innerHTML += `<tr>
      <td class="task_id">${element.id}</td>
      <td class="task_userId">${element.userId}</td>
      <td class="task_description">${element.title}</td>
      <td "task_status">${element.completed}</td>
      <td class="icons_td">
        <i class="fa fa-edit" title="edit task"></i>
   <i class="fa fa-check" title="completed task" onclick="changeStatus(${element.id})"></i>
     <i class="fa fa-trash" title="delete task" onclick="removeTask(${element.id})"></i> 
     </td> 
      </tr>`;
      });
    })
    .catch((err) => {
      console.log(err);
    })
}

function getRecentTasks() {
  fetch("http://localhost:3000/getRecentTasks")
    .then((data) => {
      console.log("dataRecent", data)
      return data.json();
    })
    .then((res) => {
      console.log("res", res)
      let divEl = document.getElementsByClassName("tbody")[0];
      divEl.innerHTML = "";
      res.forEach((element) => {
        divEl.innerHTML += `<tr>
    <td class="task_id">${element.id}</td>
    <td class="task_userId">${element.userId}</td>
    <td class="task_description">${element.title}</td>
    <td "task_status">${element.completed}</td>
    <td class="icons_td">
      <i class="fa fa-edit" title="edit task"></i>
   <i class="fa fa-check" title="completed task" onclick="changeStatus(${element.id})"></i>
   <i class="fa fa-trash" title="delete task" onclick="removeTask(${element.id})"></i> 
   </td> 
    </tr>`;
      });
    })
    .catch((err) => {
      console.log(err);
    })
}



function getAllTasksByStatus(status) {
  fetch(`http://localhost:3000/getAllTasksByStatus/${status}`)
    .then((data) => {
      console.log("dataRecent", data)
      return data.json();
    })
    .then((res) => {
      console.log("res", res)
      const divEl = document.getElementsByClassName("tbody")[0];
      divEl.innerHTML = "";
      res.tasks.forEach((element) => {
        divEl.innerHTML += `<tr>
    <td class="task_id">${element.id}</td>
    <td class="task_userId">${element.userId}</td>
    <td class="task_description">${element.title}</td>
    <td "task_status">${element.completed}</td>
    <td class="icons_td">
      <i class="fa fa-edit" title="edit task"></i>
   <i class="fa fa-check" title="completed task" onclick="changeStatus(${element.id})"></i>
   <i class="fa fa-trash" title="delete task" onclick="removeTask(${element.id})"></i> 
   </td> 
    </tr>`;
      });
    })
    .catch((err) => {
      console.log(err);
    })
}

function creatNewTask() {
  let body = document.getElementsByClassName("addTask_input")[0];
  console.log('body', body)
  console.log('body', body.value)
  let data = { "title": body.value }
  fetch(`http://localhost:3000/newTask`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify(data)
  })
    .then((data) => {
      console.log("newData", data)
    })
    .catch((err) => {
      console.log(err);
    })
}

function removeTask(taskId) {
  let data = { "id": taskId }
  fetch(`http://localhost:3000/removeTask`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "DELETE",
    body: JSON.stringify(data)
  })
    .then((data) => {
      console.log("newData", data)
    })
    .catch((err) => {
      console.log(err);
    })
}

function changeStatus(taskId) {
  let data = { "id": taskId }
  fetch(`http://localhost:3000/editTaskStatus`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "PUT",
    body: JSON.stringify(data)
  })
    .then((data) => {
      console.log("newData", data)
    })
    .catch((err) => {
      console.log(err);
    })
}







