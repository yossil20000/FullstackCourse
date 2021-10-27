const menuItem = document.querySelector('#menu');
/* menuItem = document.getElementById("menu"); */

function createMenuItem(name) {
    if(name == undefined)
    {
        name = document.getElementById("CreateChild").value;
    }
    let li = document.createElement('div');
    li.textContent = name;
    menuItem.appendChild(li); 
}
