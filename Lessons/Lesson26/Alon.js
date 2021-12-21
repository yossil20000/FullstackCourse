//async / await
// async return promise
const urlAsync = "https://data.gov.il/api/3/action/datastore_search?resource_id=bf7cb748-f220-474b-a4d5-2d59f93db28d&limit=30";
async function getData(url){
    const response = await fetch(url);
    const   dataJson = await response.json();
    return dataJson;
}
let result1 =  getData(urlAsync).then( data => {
    console.log("From async" , data.result.records);
});

async function fetchData(url){
    try{
        return await fetch(url);
    }
    catch(err){
        console.error(err);
    }
}
async function getJson(data){
    try{
        return await data.json();
    }
    catch(err){
        console.error(err);
    }
    
}

async function getDataAsync(url){
    try{
        let fetch = await fetchData(url);
        let response = await getJson(fetch);
        return response;
    }
    catch(err)
    {
        console.console.error(err);
    }
}



let resultAsync = getDataAsync(urlAsync)
.then(data => {
    console.log("getDataAsync"  ,data.result.records)
    for(a of data.result.records){
        console.log(`${a._id}, ${a.title2}`);
    }
});
