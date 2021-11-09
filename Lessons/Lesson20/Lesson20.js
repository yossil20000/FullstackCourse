//this is simple object not a class
const container = document.getElementsByClassName("container");
const inputItem = document.getElementById("inputItem");
var items = new Array();

const r = 0xff;
const g = 0xf4;
const b = 0x56;
const color = r << 16 | g << 8 | b;
let colorIndex=10;

function AddItem()
{
    let itemsList1 = document.querySelector('.bbb');
    var item = inputItem.value;
    if(item)
    {
       
       
        let p = document.createElement("li");
        
        p.innerText= item;
        colorIndex +=10;
        p.style.color = `#${color.toString(16).padStart(6, "0")}`;;
        console.log(color);
        itemsList1.appendChild(p);
     // document.getElementById('itemsList').appendChild(p);
        
        
    }
    
}
var annonymos = function(name)
{
    console.log(name);
}
//arrow function
var hello = (name) =>{
    return name;
}
// shorter becasuse only one parameter
var hello = name =>{
    return name;
}
// if you can have only one operation
var heeloShort = name => name;
var helloWithoutParameter = () => "gg";
var helloMultiparameters = (a,b) => a + b;
// callback 
function calbackFunction(a,b,callback)
{
    callback();
}

var myNums =[1,2,3,4];
function pluseOne(num)
{
    console.log(num+1);
    return num+1;
}
for(var i=0;i < myNums.length;i++)
{
    pluseOne(myNums[i]);
}
//foreach
myNums.forEach(pluseOne);


function contrastYiq(color) {
    const r = (color >>> 16) & 0xff;
    const g = (color >>> 8) & 0xff;
    const b = color & 0xff;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 0x0 : 0xffffff;
  };