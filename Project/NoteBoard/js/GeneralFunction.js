let mobileWidthQuery = getComputedStyle(document.documentElement).getPropertyValue('--mobile-width');
var tabletWidthQuery = getComputedStyle(document.documentElement).getPropertyValue('--tablet-width');
let deviceMobile = window.matchMedia(`(min-width:${mobileWidthQuery})`);
let deviceTablet = window.matchMedia(`(min-width:${tabletWidthQuery})`);
deviceMobile.addEventListener('change', handleDeviceChange);
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
    console.log(e.media.includes(mobileWidthQuery));
    if(e.matches && e.media.includes(mobileWidthQuery))
    {
        typeScreen.name = Display.Tablet;
            console.log(`match mobile ${mobileWidthQuery} typeScreen:${typeScreen.IsTablet()}`);
    }
    else if(e.matches && e.media.includes(tabletWidthQuery)){
        typeScreen.name= Display.Desktop;
        console.log(`match ${tabletWidthQuery} typeScreen:${typeScreen.IsDesktop()}`);
    }
    else {
        typeScreen.name = Display.Mobile;
        console.log(`match ${mobileWidthQuery} typeScreen:${typeScreen.IsMobile()}`);
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