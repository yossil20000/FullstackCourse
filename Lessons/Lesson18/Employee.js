var listContainer;
var items = 0;
var header = document.getElementById("header");
CreateInputGrid();
CreateHeader();
function CreateInputGrid()
{
    
    var inputContainer = document.createElement("div");
    inputContainer.className="inputContainer";
    var inputElement = CreateItem("div","input-title","");
    inputElement.appendChild(CreateInput("","text","Employee List","input-name"));
    inputContainer.appendChild(inputElement);

    document.body.appendChild(inputContainer);
    inputContainer = document.createElement("div");
    inputContainer.className="listContainer";
    inputContainer.id = "listContainer"
    
    document.body.appendChild(inputContainer);

}
function CreateHeader()
{

    listContainer = document.getElementById("listContainer");
    var closeItem = document.createElement("div");
    closeItem.className="itemIndex" ;
    closeItem.innerText = "#";
    listContainer.appendChild(closeItem);
    
    listContainer.appendChild(CreateItem("div" , "itemTitle", "First Name"));
    listContainer.appendChild(CreateItem("div" , "itemAge", "Sallary"));
    listContainer.appendChild(CreateItem("div" , "itemSalary", "Age"));
    listContainer.appendChild(CreateItem("div" , "itemAction", "Action"));
   
}
function  CreateNewItem(item)
{
    var itemToAdd = document.getElementById('itemToAdd');
    
    listContainer = document.getElementsById("listContainer");
    var closeItem = document.createElement("div");
    closeItem.className="itemIndex" ;
    closeItem.innerText = items++;
    listContainer.appendChild(closeItem);
    
    listContainer.appendChild(CreateItem("div" , "itemTitle", item));
    listContainer.appendChild(CreateItem("div" , "itemAge", item));
    listContainer.appendChild(CreateItem("div" , "itemSalary", item));
    
    listContainer.appendChild(CreateInput("itemAction","button", "X"));
    
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
