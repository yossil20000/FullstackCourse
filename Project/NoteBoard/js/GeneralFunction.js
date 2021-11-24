let desktopWidthQuery = getComputedStyle(document.documentElement).getPropertyValue('--desktop-width');
let tabletWidthQuery = getComputedStyle(document.documentElement).getPropertyValue('--tablet-width');
let deviceDesktop = window.matchMedia(`(min-width:${desktopWidthQuery})`);
let deviceTablet = window.matchMedia(`(min-width:${tabletWidthQuery})`);
deviceDesktop.addEventListener('change', handleDeviceChange);
deviceTablet.addEventListener('change',handleDeviceChange);

class Display{
    static Mobile = new Display('Mobile');
    static Tablet = new Display('Tablet');
    static Desktop = new Display('Desktop');
    name;
    constructor(name) {this.name = name;}
    IsMobile(){
        
        return this.name ===  Display.Mobile;
    }
    IsTablet() {
        return this.name === Display.Tablet;
    }
    IsDesktop() {
        return this.name === Display.Desktop;
    }
    toString(){
        return `Display.${this.name}`;
    }
}
let typeScreen = new Display(Display.Mobile);
handleDeviceChange(deviceTablet);
handleDeviceChange(deviceDesktop);


/* const eDisplay = {
    Mobile = 'Mobile',
    Tablet =  'Tablet',
    Desktop = 'Desktop',
    IsMobile(val){
        return val ===  this.Mobile;
    },
    IsTablet(val) {return val === this.Tablet;},
    IsDesktop(val) {return val === this.Desktop;}
}; */


function handleDeviceChange(e){
    console.log(e);
    if(e.matches && e.media.includes(tabletWidthQuery))
    {
        typeScreen.name = Display.Tablet;
            console.log(`match mobile ${tabletWidthQuery} typeScreen:${typeScreen.IsTablet()} ${typeScreen.name}`);
    }
    else if(!e.matches && e.media.includes(tabletWidthQuery))
    {
        typeScreen.name = Display.Mobile;
        console.log(`match mobile ${tabletWidthQuery} typeScreen:${typeScreen.IsMobile()} ${typeScreen.name}`);
    }
    else if(e.matches && e.media.includes(desktopWidthQuery)){
        typeScreen.name= Display.Desktop;
        console.log(`match ${desktopWidthQuery} typeScreen:${typeScreen.IsDesktop()} ${typeScreen.name}`);
    }
    else if(!e.matches && e.media.includes(desktopWidthQuery)){
        typeScreen.name= Display.Tablet;
        console.log(`match ${desktopWidthQuery} typeScreen:${typeScreen.IsDesktop()} ${typeScreen.name}`);
    }
    else {
        typeScreen.name = Display.Desktop;
        console.log(` Illigal typeScreen:${typeScreen.IsMobile()} ${typeScreen.name}`);
    }
}

function setDateTime(element, date) {
  
    const dateForDateTimeInputValue = date => new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 19);
    element.value = timestampToDatetimeInputString(Date.now());;
}

function timestampToDatetimeInputString(timestamp) {
    const date = new Date((timestamp + _getTimeZoneOffsetInMs()));
    // slice(0, 19) includes seconds
    return date.toISOString().slice(0, 19);
  }
  
  function _getTimeZoneOffsetInMs() {
    return new Date().getTimezoneOffset() * -60 * 1000;
  }
  function setHide(element,hide)
{
    if(hide)
            element.classList.add('hide');
        else
            element.classList.remove('hide');
}
function getCreateElementById(htmlElement,className,id)
{
    let elements = document.querySelectorAll(`#${id}`);
    if(elements.length == 0)
    {
        
        let element = document.createElement(htmlElement);
        element.id = id;
        element.className = className;
        return element;
    }
    else if(elements.length == 1)
        return elements[0];
    else
        return undefined;
}
function getCreateElementByClass(htmlElement,className,id)
{
    let elements = document.querySelectorAll(`.${className}`);
    if(elements.length == 0)
    {
        
        let element = document.createElement(htmlElement);
        element.id = id;
        element.className = className;
        return element;
    }
    else if(elements.length == 1)
        return elements[0];
    else
        return undefined;
}

function setInLocalStorate(key, value)
{
    localStorage.setItem(key, JSON.stringify(value));
}
function getLocalStorage(key)
{
    let o = JSON.parse( localStorage.getItem(key));
    console.log(o);
    return o;
}