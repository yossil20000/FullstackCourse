const urlPlaceHolder = "https://jsonplaceholder.typicode.com"
const urlPosts = `${urlPlaceHolder}/posts`;
const urlCommnets = `${urlPlaceHolder}/comments`;
const urlUsers = `${urlPlaceHolder}/users`;
const urlTodos = `${urlPlaceHolder}/todos`;
const postId = "postId";
const userId = "userId";
const id = "id";

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

function getUrlUserId(url,index)
{
    return `${url}/?${userId}=${index}`;
}

function getUrlItemId(url,index)
{
    return `${url}/?${id}=${index}`;
}