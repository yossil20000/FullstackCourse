var lastNumber = "";
var tempValue = "";
var operationStart ="";
var operation = new Array();
operation.push("0");             
function displayBoard(value){
    var calculator_result = document.getElementById("calculator_input-d").innerHTML;
    var boardContent = calculator_result == '0'? value : calculator_result  + value;
    UpdateInputDisplay(boardContent);
    console.log(value);
    lastNumber+= value;
    /* if(operationStart != "")
        CompleteOperation(); */
}
function CompleteOperation()
{
    if(operationStart == "^")
    {
        var values = document.getElementById("calculator_input-d").innerHTML.split("^");
        var result = Math.pow(values[0] , values[1]);
        AddResult(result);
        operationStart ="";
        UpdateInputDisplay("");
        lastNumber="";
    }
    operationStart ="";
}
function UpdateResult(value)
{
    document.getElementById("calculator_result").innerHTML = value;
}
function AddResult(value)
{
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML + value;
}
function UpdateInputDisplay(value)
{
    document.getElementById("calculator_input-d").innerHTML = value;
}


function ClearResult()
{
    document.getElementById("calculator_result").innerHTML = 0;
    document.getElementById("calculator_input-d").innerHTML = "";
}
function ClearInputDisplay()
{
    UpdateInputDisplay("");
}
function CalculatorAdd()
{

/*     if(CheckIfLastIsOperation())
        return; */
        if(operationStart == "")
        {
            document.getElementById("calculator_input-d").innerHTML =
            document.getElementById("calculator_input-d").innerHTML +
             document.getElementById("calculator_input-d").innerHTML + "+";
             operationStart = "+";
        }
        else
        {

        }
    
   /*  ClearInputDisplay(); */
}
function CalculatorDivide()
{
    if(CheckIfLastIsOperation())
        return;
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML  + document.getElementById("calculator_input-d").innerHTML + "/";
    ClearInputDisplay();
}

function CalculatorMul()
{
    if(CheckIfLastIsOperation())
        return;
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML  + document.getElementById("calculator_input-d").innerHTML + "*";
    ClearInputDisplay();
}
function CalculatorMinus()
{
    if(CheckIfLastIsOperation())
        return;
    document.getElementById("calculator_result").innerHTML = document.getElementById("calculator_result").innerHTML  + document.getElementById("calculator_input-d").innerHTML + "-";
    ClearInputDisplay();

}
function CalculatorEqual()
{
    var equestion = document.getElementById("calculator_result").innerHTML + document.getElementById("calculator_input-d").innerHTML;
    console.log(equestion);
    var result = eval(equestion);
    document.getElementById("calculator_result").innerHTML = result;
    ClearInputDisplay();
}

function CheckIfLastIsOperation()
{
    var result = document.getElementById("calculator_input-d").innerHTML;
    if(result.endsWith("*") || result.endsWith("/") || result.endsWith("-") || result.endsWith("+") )
    return true;
}
function CalculatorBack()
{
    var result = document.getElementById("calculator_result").innerHTML;
    result = result.slice(0, -1);
    document.getElementById("calculator_result").innerHTML= result;
}
function CalculatorPower()
{
    if(CheckIfLastIsOperation())
        return;
    if(lastNumber == "")
    return;
    operationStart = "^";
    document.getElementById("calculator_input-d").innerHTML = document.getElementById("calculator_input-d").innerHTML + "^";

}
