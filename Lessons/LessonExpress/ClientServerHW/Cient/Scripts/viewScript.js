function DrawUsers(data){
    const tabledata = document.getElementById("usersData");
    tabledata.innerHTML = "";
    data.forEach(element => {
        let tags = `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td></td><td></td></tr>`;
    tabledata.insertAdjacentHTML('beforeend', tags);
    });

    
}

function OnEdit(e) {
    console.log(`Click Edit on target ${e.id}`);
}
function OnDelete(e) {
    console.log(`Click Delete on target ${e.id}`);
}
function AddUser(e){
    console.log(`Add Button click ${e.id}`);
}