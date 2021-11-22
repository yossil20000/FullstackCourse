let filter ;
 window.onload = () =>{
    filter = readSearchFromStorage();
    document.getElementById('searchCoin').value = filter;
}
const table = document.getElementById('tableCoin');
FillTable(data);
function FillTable(data, filter)
{
    let index=0;
    table.innerHTML = "";
    data.data.forEach(element => {
        let bHide =  true;
        if(filter )
        {
           if(element.symbol.toUpperCase().includes(filter.toUpperCase()) || element.name.toUpperCase().includes(filter.toUpperCase()) ) 
           {
            AddTableRow(element,++index);
           }
        }
        else
        {
            AddTableRow(element,++index);
        }
    });
}
function AddTableRow(item, index)
{
    let rawElemnt = document.createElement('tr');
    rawElemnt.innerHTML =  `<td>${index}</td><td>${item.symbol}</td><td>${item.name}}</td><td>${item.priceUsd}</td>`;
    table.appendChild(rawElemnt);
}
function filterData(){

    let filter = document.getElementById('searchCoin').value;
    FillTable(data,filter);
    saveSearchOnStorage(filter);
}

//local storage not more 5Mb
//Session Storage save until closing the card
//Cookies  until 4kb
function saveSearchOnStorage(item)
{
    localStorage.setItem('lastSearch', item);
    sessionStorage.setItem('lastSearch', item);
}
function readSearchFromStorage(){
   let filter =   localStorage.getItem('lastSearch')
   if(!filter)
    filter = "BTC";
return filter;
}


// filter, map , reduce , Let, Const, var