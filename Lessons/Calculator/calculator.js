function displayBoard(value){
    var calculator_result = document.getElementById("calculator_result").innerHTML;
    var boardContent = calculator_result == '0'? value : calculator_result  + value;
    UpdateResult(boardContent);
    console.log(value);
}

function UpdateResult(value)
{
    document.getElementById("calculator_result").innerHTML = value;
}
function ClearResult(display)
{
    if(display == undefined)
    {
        display = 10;
    } 
    document.getElementById("calculator_result").innerHTML = display;
}
function CalculatorAdd()
{
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + "+";
}
function CalculatorDivide()
{
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + "/";
}

function CalculatorMul()
{
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + "*";
}
function CalculatorMinus()
{
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + "-";

}
function CalculatorEqual()
{
    var equestion = document.getElementById("calculator_result").innerHTML;
    var result = eval(equestion);
    document.getElementById("calculator_result").innerHTML = result;
}

