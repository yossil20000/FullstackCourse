import fetch from "../Moduls/fetch.js";
import { sumOfElement,arrMul,arrLastNItems,arrRemoveAt,sortBy ,filterBy,newIndexArray,arrMakUniq,arrShuffel,arrShuffelSwift} from "../Moduls/arrayFunction.js";
const url = "";
const arr = [1,2,3,4,5,6];
const dupArr = [1,1,2,3,6,6,9,9,9];
function drawSumOfElement(){
    let result = sumOfElement(arr);
    console.log(`sum: ${result}`); 
    AddResult("Summ of array",arr,result)  
}
function drawMulOfArray(input)
{
    const result = arrMul(arr,input);
    AddResult(`Multiple by ${input} each Elemnts of array`,arr,result)
}
function drawLastNitems(input)
{
    const result = arrLastNItems(arr,-input);
    AddResult(`Get Last ${input} Elemnts of array`,arr,result);
}

function drawRemoveItemsAt(input)
{
    let original = [...arr];
    const result = arrRemoveAt(arr,input);
    AddResult(`Remove item At Position${input} from array item remove: ${result}`,original,arr);
}
function drawSorBy(input){
    let original = [...arr];
    const result = sortBy(arr,(left,right) => right - left);
    AddResult(`Sort Arry decended aray`,original,result);
}

function drawFilterBy(input){
    let original = [...arr];
    const result = filterBy(arr,(item) => item > input);
    AddResult(`Filter Arry By Grether Then ${input} `,original,result);
}
function drawCreateNewIndexedArray(length) {
    const result = newIndexArray(10);
    AddResult(`Create new indexed array [0,1 ...] Length:${length} `,"",result);
}
function drawRemoveDuplicateElements()
{
    const original = [...dupArr];
    const result = arrMakUniq(dupArr);
    AddResult("Remove Duplicated Elements ",original,result);
}
function drawShuffelArray()
{
    const original = [...arr];
    const result = arrShuffelSwift(arr);
    AddResult(`Shuffel Array `,original,result);
}
drawSumOfElement();
drawMulOfArray(3);
drawLastNitems(3);
drawRemoveItemsAt(5);
drawSorBy();
drawFilterBy(3);
drawCreateNewIndexedArray(10);
drawRemoveDuplicateElements();
drawShuffelArray();
function AddResult(name,before,after){
    const example = document.getElementById("examples");
    let element = document.createElement('h2');
    element.innerText = name;
    example.appendChild(element);
    let element1 = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = `Input arr:${before}`;
    element1.appendChild(p);
    example.appendChild(element1);
    p = document.createElement('p');
    p.innerText = `Result arr:${after}`;
    element1.appendChild(p);
    example.appendChild(element1);
    
}
console.log(`Fuffel Arr: ${arr} to ${arrShuffel(arr)}`);
console.log(`Fuffel Arr: ${arr} to ${arrShuffelSwift(arr)}`);
console.log(`sum: ${sumOfElement(arr)}`);
console.log(`newArr: ${arrMul(arr,3)}`);
console.log(`newArr after slice: ${arrLastNItems(arr,-3)}`);
console.log(`newArr Splice: ${arr} Removed:${arrRemoveAt(arr,5)} new:${arr}`);
console.log(`sort: arr:${arr} soterd: ${sortBy(arr,(left,right) => right - left)} ${arr}`);
console.log(`filter: ${arr} filtered:${filterBy(arr,(item) => item > 3)}`);
console.log(`new array: ${newIndexArray(10)}`);
console.log(`remove duplecate: ${dupArr}  => ${arrMakUniq(dupArr)} Original: ${dupArr}`);

(  
    
    async () =>{
        
        await fetch(url);
    }
    
)();


