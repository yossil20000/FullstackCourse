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

const ul = document.querySelector(".dc-overview");
//using innerHTML
var numVisit = 56;
var existingListItem = document.querySelectorAll(".dc-overview > li")[2];
//This code delete all the element insert before
/* existingListItem.innerHTML = "<strong>I have"+ numVisit + " been modified!"; */
//Or using ` `
existingListItem = `<li><strong>You have visit ${numVisit} times 2</strong></li>`;
//Addin new to exist one way
ul.innerHTML += existingListItem;
//more elegant and powerfull insertAdjacentHTML
ul.insertAdjacentHTML("beforeend",`<li>i am new beforeend </li>`);
ul.insertAdjacentHTML("afterbegin",`<li>i am new afterbegin  </li>`);
ul.insertAdjacentHTML("beforebegin",`<li>i am new beforbegin </li>`);
//with AdacentElement
var newelement = document.createElement("li");
numVisit = 58;
existingListItem = `<li><strong>You have visit ${numVisit} times 2</strong></li>`;
newelement.innerHTML = existingListItem;
numVisit = 60;
ul.insertAdjacentElement("afterend",newelement);
ul.insertAdjacentHTML("beforebegin",existingListItem);
