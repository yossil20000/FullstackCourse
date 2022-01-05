const url = "https://zoo-animal-api.herokuapp.com/animals/rand/1"
let data;
getDataAsync(url).then(
    a => {
        console.log(a);
        DrawData(a);
    }
);

function DrawData(a){
    console.log(a[0].active_time);
}
