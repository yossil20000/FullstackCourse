//https://www.youtube.com/watch?v=zu6I2FXakLI
let fetchData = function(data){
    return new Promise((resolve,reject) => {
        
        setTimeout(() => {
            console.log('Fetching Data Complete');
            resolve({
                id: 1,message: 'Nicw Work'
            });
        },2000);
    });
};

let parseData = function(data){
    return new Promise((resolve,reject) => {
        console.log('Parsing ...');
        setTimeout(() => {
            let parsedOutput = `Parsed the data id: ${data.id} with message ${data.message}`;
           
            resolve({
                parsed: parsedOutput
            });
        } , 2000);
    });
};

let echoData = function(data){
    return new Promise((resolve,reject) => {
        //To simulate error
        //bar = foo;
        setTimeout(() => {
           
            console.log(data.parsed);
        }, 2000);
    });
};

//To catch the error
fetchData().then(parseData).then(echoData).catch(err => {
console.error(err);
});




