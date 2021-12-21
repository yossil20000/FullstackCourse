// Promiss.All()

const p1 = new Promise((resolve, reject) =>{
    setTimeout( resolve,3000,'hello'); 
    });
    
    const p2 = new Promise((resolve, reject) =>{
        setTimeout( resolve,2000,'World'); 
        });
    const p3 = 1000;
    //p1.then(m => {console.log(m);});
    
    Promise.all([p1,p2]).then( result => {
        console.log(result);
    }).catch( err  => {
    console.error('Promiss.All rejection' , err);
    });
    
    Promise.race([p1,p2,p3]).then( result => {
        console.log(result);
    }).catch( err  => {
    console.error('Promiss.All rejection' , err);
    });