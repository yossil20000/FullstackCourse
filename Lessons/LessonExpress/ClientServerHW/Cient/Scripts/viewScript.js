

function DrawUsers(data){
    const tabledata = document.getElementById("usersData");
    tabledata.innerHTML = "";
    data.forEach(element => {
        let tags = `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td><button onclick="OnEdit(this)"  id=${element.id}>Edit</button></td><td><button onclick="OnDelete(this)"  id=${element.id}>Delete</button></td></tr>`;
    tabledata.insertAdjacentHTML('beforeend', tags);
    });

    
}

function OnEdit(e) {
    console.log(`Click Edit on target ${e.id}`);
}
function OnDelete(e) {
    console.log(`Click Delete on target ${e.id}`);
    (
        
        async () =>{
            const data = await fetchUrl(`127.0.0.1:3000/delete/${e.id}`);
            DrawUsers(data);

        }
    )();

}
function AddUser(e){
    console.log(`Add Button click ${e.id}`);
}