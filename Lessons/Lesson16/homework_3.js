
// Decleration  of function
// get 3 values
// numOfNumbers :  amount of rundom numbers
//  from : the lowest number
// to : the greatest number
// return: an array of the numbers
function  GetRandomNumbers(numOfNumbers, from , to)
{
    var numbers = new Array();
    for(var i=0; i< numOfNumbers;i++)
    {
        numbers[i] = Math.floor(Math.random() * (to - from + 1) )+ from;
    }
    return numbers;
}
// Call the function
var n = GetRandomNumbers(2,1,6);

//Decleration of function
//Get: numbers - an array of numbers
//return : true if equal, false if not
function CheckInNumbersEqual(numbers){
    return result = numbers.every(x => x == numbers[0]);
}

//function that return  the numbers of loops until random numbers are equals
function ReturnWhenEqual()
{
    var counter=0
    do{
        counter++;
    }while(CheckInNumbersEqual(GetRandomNumbers(3,1,10)) == false);
    return counter;
}

//Checking the functions
var numbers = [1,1,1];
var result = CheckInNumbersEqual(numbers);
console.log(`${numbers} are equal : ${result}`);
var numbers = [1,1,4];
var result = CheckInNumbersEqual(numbers);
console.log(`${numbers} are equal : ${result}`);
numbers = GetRandomNumbers(3,1,10);
var result = CheckInNumbersEqual(numbers);
console.log(`${numbers} are equal : ${result}`);
var countsUntilReturn = ReturnWhenEqual()
console.log(`Equal achive after ${countsUntilReturn}`);