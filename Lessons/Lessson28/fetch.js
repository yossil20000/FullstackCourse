//https://data.gov.il/api/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&limit=100
const loadData = async () => {
    try{
        const url = "https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=400";
        const result = await Promise.all([fetch(url)]);
        const dataPromise = result.map( result => result.json());
        const finalData = await Promise.all(dataPromise);
        
        return finalData;
    }
    catch(err){
    console.log(err);
    }    
};
let data;
let search  = "ירושלים";
 (
async () => {
 data = await loadData();
console.log(data[0].result.records);
DrawSite(data[0].result.records,search);

}
)();
function searchSite(item){
    loadData().then( data =>
        {
            DrawSite(data[0].result.records,item);
        });
    
}


function DrawSite(data, search){
    console.log("Search For:", search);
    
data.filter(item => {
    if(search == "")
        return true;
    return item.ezor.toUpperCase() == search.toUpperCase()

}).forEach(element => {
    
    console.log(`${element._id}, ${element.ezor},${element.cod_beit_sefer},${element.ktovet},${element.menahel}`);
});
}

