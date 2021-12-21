let prom ;
function Get2Numbers()
{
    let results = new Array();
    
    results.push(Math.floor((Math.random()* 6) + 1 ));
    results.push(Math.floor((Math.random()* 6) + 1 )) ;

    return results

}
function GetCubes()
{
    console.log("Please wait to Cubes Results")

    prom = new Promise(
        (resolve, reject) =>{
            let x=1;
            if(x == 2)
            {
                reject("Error");
            }
            else
            setTimeout(() => {
                resolve(Get2Numbers());
            }, 2000);
                
        }
    );
    // promise.then listn on resolve
    //prom.then((data) => console.log(`The Cubes: ${data}`));
    prom.then(ShowResults);
    // Wpromis.catch when reject is raised
        prom.catch((err) => console.error(`err: {err}`));
}
function ShowResults(data){
   console.log(`The Results: ${data[0]} , ${data[1]}`);
   if(data[0] == data[1])
        console.log("Lucky");
}
GetCubes();

function Delay(delay)
{
    let promise = new Promise((resolve) => {
        setInterval( () => {resolve()} ,delay);
    }
        
    )
    return promise;
}

Delay(500).then(() => console.log("hi"));