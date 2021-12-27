const loadData = async () => 
try{
    const url = "://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=400";
    const result = Promise.all({fetch(url)});
    const dataPromise = result.map( result => result.json());
    const finalData = await Promise.all(dataPromise);
    console.log(finalData); 
    return finalData;
}
catch(err){
console.log(err);
}
};

(
async => {

}
)();