var listContainer;
var items = 0;
var header = document.getElementById("header");
function  CreateNewItem(item)
{
    var itemToAdd = document.getElementById('itemToAdd');
    
    listContainer = document.getElementById("listContainer");
    var closeItem = document.createElement("div");
    closeItem.className="itemIndex" ;
    closeItem.innerText = items++;
    listContainer.appendChild(closeItem);
    
    listContainer.appendChild(CreateInput("itemCeack","checkbox","vv"));
    listContainer.appendChild(CreateItem("div" , "itemTitle", item));
    listContainer.appendChild(CreateInput("itemClose","button", "X"));
    
;}

function CreateInput(className="", type="text" , content="text",id="")
{
    var newItem = document.createElement("div");
    newItem.className=className ;
    var cheack =  document.createElement('input');
    cheack.type = type;
    cheack.value = content;
    cheack.id = id;
    newItem.appendChild(cheack);
    return newItem;
}
function CreateItem(tag="div" ,className="",caption="") 
{
    var newItem = document.createElement("div");
    newItem.className= className ;
    newItem.innerText= caption;
    return newItem;
}

function AddItem()
{
    var item = document.getElementById("itemToAdd");
    CreateNewItem(item.value);
}
