/* fetch('http://example.com/movies.json')
.then(respose => respose.json())
.then(data => console.log(data)); */
const url = "https://jsonplaceholder.typicode.com/posts/1";
fetch(url)
.then(isStatus200)
.then(getPostJson)
.then(json => console.log(json))
.catch(err => console.error(err));

function isStatus200(res)
{
    if(res.status === 200){
        return res;
    }else{
        let err = new Error(res.statusText);
        err.response = res;
        throw err;
    }
}
function getPostJson(res){
    console.log('Getting Json ...');
    return res.json();
}

function getTitle(post){
    console.log("Getting title...");
    let title = post.title;
    return title;
}
function echoTitle(title){
    console.log(`title: ${title}`);
}
//bad news not returning nesting and not catching
//This casue to loos syncronization and title will be undefined
fetch(url).then(isStatus200).then( result => {
    console.log("Got a result...");
    getPostJson(result).then(post => getTitle(post));
}).then(title => echoTitle(title));
fetch(url).then(isStatus200).then(result => {
    console.log("Getting Good Result");
    return getPostJson(result);
}).then(getTitle)
.then(echoTitle)
.catch(err => console.error(err));