var x;
var y;
x = prompt("Get the x value");
y = prompt("Get y value" ,"1");
x=parseInt(x,10);
y=parseInt(y,10);

alert(`the sum of: ${x} and ${y}) is:${x+y}` );

alert(`${x} * ${y} = ${x * y}`);

if(x >= y)
{
    alert("the bigest is: " + x   );
}
else
    alert("the bigest is: " + y   );
if(x % 2)
{
    alert(`${x} is odd`);
}
else
alert(`${x} is even`);

x = prompt("Enter the day of the week number between 1 - 7");
if(x== "1")
alert("Good Week");
else if(x >= 2 && x <= 4 )
    alert("Good Day");
else
alert("Good Weekend");
