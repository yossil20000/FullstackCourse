import fetchUrl from "../Moduls/fetch.js";
const url = `http://127.0.0.1:3000/`;
(    
    async () =>{
        
        let data = await fetchUrl(url);
        DrawUsers(data);
    }
    
)();
