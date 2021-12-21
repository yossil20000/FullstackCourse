const url = "https://data.gov.il/api/3/action/datastore_search?resource_id=bf7cb748-f220-474b-a4d5-2d59f93db28d&limit=30";
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
function json(response) {
  return response.json();
}
let results;
fetch(url).then(json).then( function(data){
console.log("Request:" , data);
    DrawResult(data.result.records);
}).catch(function(error){
console.log("Request Failed", error);
});

function DrawResult(results)
{
    console.log(results);
    title.innerText = `${results[0].title}`;
    results.forEach(element => {
        let newItem = document.createElement('li');
        let title = document.createElement('div');
        title.innerHTML = `<span>${element._id} )  ${element.title2}</span>`;

        newItem.innerHTML = element.description4;
        listItem.appendChild(title);
        listItem.appendChild(newItem);
    });

}
const listItem = document.getElementById('listItem');
const title = document.getElementById('title');


