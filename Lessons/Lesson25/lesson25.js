const apiAddress = "https://jsonplaceholder.typicode.com/posts";
const inputName = document.getElementById('name');
const image = document.getElementById('image');
const displayName = document.getElementById("displayName");
console.log(inputName);
let cats = new Array();
function cmdFetchById(id)
{
    fetch(`{apiAddress}/post/{id}`)
}
FillCats(4);
function FillCats(numbers)
{
    for(i=0;i<numbers;i++)
        cats.push(`image${i}.jpg`);
    console.log(cats);
}

function GetACat()
{

    let rnd = Math.floor(Math.random()* cats.length);
    if(rnd >= 0 && rnd < cats.length)
        console.log(cats[rnd]);
    image.src = `./images/image${rnd}.jpg`
    displayName.innerText = `${inputName.value} You Look Like`;
    displayName.classList.remove('hide');
    image.classList.remove("hide");

}