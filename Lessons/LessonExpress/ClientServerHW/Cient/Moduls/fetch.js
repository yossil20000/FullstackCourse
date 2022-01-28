
export default async function fetchUrl(url){
    console.log("Fetch");
    let response = await fetch(url);
   if(response.ok)
   {
        let jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
   }
   else
   {
       alert("http error " + response.status );
   }
}


