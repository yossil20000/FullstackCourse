var observe;
if(window.attachEvent){
    observe = (element,event,handler) => {
        element.attachEvent('on'+event,handler);
    };
}
else{
    observe = (element,event,handler) => {
        element.addEventListener(event,handler,false);
    };
}
/**
 * @param {very_long_type} name           Description.
 * @param {type}           very_long_name Description.
 */
function initObserve(elementId)
{
    let element =  document.getElementById(elementId);
    if(!element)
        return;
    element.style.overflow = 'hidden';
    function resize(){
        element.style.height = 'auto';
        element.style.height = element.scrollHeight+'px';
    }
     /* 0-timeout to get the already changed text */
    function delayedResize(){
        window.setTimeout(resize,0);
    }
    observe(element,'change',resize);
    observe(element,'cut', delayedResize);
    observe(element,'paste', delayedResize);
    observe(element,'drop',delayedResize);
    observe(element,'keydown',delayedResize);
    element.focus();
    if(element.select)
    {
        element.select;
    }   
    resize();
    
}