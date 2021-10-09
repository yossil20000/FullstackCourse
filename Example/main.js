let open = document.getElementById("open") , 
close = document.getElementById("close");
let menu = document.getElementById("menu");
// long way
/* open.addEventListener('click',() => {
open.classList.toggle('hide');
close.classList.toggle('hide');
console.log("open click");
})
close.addEventListener('click',() => {
    open.classList.toggle('hide');
    close.classList.toggle('hide');
    console.log("open click");
    })
 */
common = (x,y,z) =>
{
    x.addEventListener('click', () => 
    {
        x.classList.toggle('hide');
        y.classList.toggle('hide');
        if(z == "slide-in"){
            menu.classList.toggle("slide");
        }
        if(z=="slide-out"){
            menu.classList.toggle("slide");
        }
    })
}
common(open,close,"slide-in");
common(close,open,"slide-in");

