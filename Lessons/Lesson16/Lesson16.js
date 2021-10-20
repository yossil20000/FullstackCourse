function  Get2RandomNumbers(numOfNumbers, from , to)
{
    var numbers = new Array();
    for(var i=0; i< numOfNumbers;i++)
    {
        numbers[i] = Math.floor(Math.random() * (to - from + 1) )+ from;
    }
    return numbers;
}

var n = Get2RandomNumbers(2,1,6)