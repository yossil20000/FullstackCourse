

exports.mul = (val1,val2) => val1 * val2;
exports.divide = (val1 , val2) => val1 / val2;

exports.yossi = function(a,b){
    return a+b;
}
exports.yossi.getLenght = value => value.length;
exports.yossi.trimSpace = value => {
    return value.replaceAll(' ', '');
    
}
exports.yossi.CharsInArray = value => {
    let count =0;
    //let l = getLenght(value);
    value.forEach(element => {
        count += element.length;
    });
    return count;
};

exports.yossi.isPalindrom = value => {
    const length = Math.floor(value.length) / 2;
    const size = value.length -1;
    for (let index = 0; index < length; index++) {
        if(value[index] != value[size - index])
        return false;
    }
    return true;
}