import fetchUrl from "../Moduls/fetch.js";
const url = `http://localhost:3000`;
(    
    async () =>{
        
        let data = await fetchUrl(url);
        DrawUsers(data);
    }
    
)();

async function fetchUrl1(url) {
    let data = await fetchUrl(url);
    DrawUsers(data);
}
