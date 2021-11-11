const inputRadius = document.getElementById("inputRadius");

function drawCircle()
{
    let radius = inputRadius.value;
    if(!radius || radius <=0)
    {
        console.log( "Failed Zero Or Null");
    }
    if(radius > 150)
    {
        console.log( "Must be less then 150");
        
    }
    else{
        console.log(radius);
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = 'rgb(200, 0, 0)';
          ctx.fillRect(150- radius, 150-radius, 2*radius, 2* radius);
          ctx.fillStyle = 'rgb(0,200,0)';
          
          ctx.beginPath();
          ctx.arc(150, 150, radius, 0, 2 * Math.PI);
          ctx.stroke();
          console.log( "drawing");
        }
    }
    

}

function clearCanvas()
{
    var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
}