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
function ClearResult()
{
    document.getElementById("calculator_result").innerHTML = 0;
}
function CalculatorAdd()
{
    if(CheckIfLastIsOperation())
        return;
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + "+";
}
function CalculatorDivide()
{
    if(CheckIfLastIsOperation())
        return;
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + "/";
}

function CalculatorMul()
{
    if(CheckIfLastIsOperation())
        return;
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + "*";
}
function CalculatorMinus()
{
    if(CheckIfLastIsOperation())
        return;
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + "-";

}
function CalculatorEqual()
{
    var equestion = document.getElementById("calculator_result").innerHTML;
    var result = eval(equestion);
    document.getElementById("calculator_result").innerHTML = result;
}

function CheckIfLastIsOperation()
{
    var result = document.getElementById("calculator_result").innerHTML;
    if(result.endsWith("*") || result.endsWith("/") || result.endsWith("-") || result.endsWith("+") )
    return true;
}
function CalculatorBack()
{
    var result = document.getElementById("calculator_result").innerHTML;
    result = result.slice(0, -1);
    document.getElementById("calculator_result").innerHTML= result;
}