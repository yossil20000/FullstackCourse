export  function sumOfElement(arr){
    return arr.reduce((current,val,index) => {
        console.log(`reduce current:${current}, val:${val} index:${index}`);
        return current + val;
    })

}
export function arrMul(arr,mul){
    return arr.map((value) => value * mul);
}
export function arrLastNItems(arr, number) {
    return arr.slice(-number);
}
export function arrRemoveAt(arr, element){
    return arr.splice(element,1);
}
export function sortBy(arr, filter){
    return arr.sort(filter);
}
export function filterBy(arr,filter){
    return arr.filter(filter);
}
export function newIndexArray(numbers){
    let arr = new Array(numbers);
    for (let index = 0; index < arr.length; index++) {
        arr[index] = index;
        
    }
    return arr;
}
export function arrMakUniq(arr){
    return arr = [... new Set(arr)];
}
export function arrShuffel(arr){
    //console.log(`Rand Set ${getRandArr(arr.length)}`); 
    let newArr = new Array()
    getRandArr(arr.length).forEach(element => {
        newArr.push(arr[element]);
    });
    return newArr;
}
export function arrShuffelSwift(arr){
    //console.log(`Rand Set ${getRandArr(arr.length)}`); 
    const size = arr.length -1;
    for (let index = 0; index < arr.length; index++) {
        let rnd = Math.floor(Math.random()* size);
        let temp = arr[rnd];
        arr[rnd] = arr[rnd+1]
        arr[rnd+1] = temp;
        
    }

    return arr;
}
function getRandArr(size){
    let set = new Set();
    
     for(let i=0; i< size;i++)
    {
        let filed = false;
        do{
            let rnd = Math.floor(Math.random()* size);
            //console.log(`Random:${rnd}`)
            if(!set.has(rnd))
                {set.add(rnd);
                filed = true;
                }
        }while(!filed);
    }
    return set;
}