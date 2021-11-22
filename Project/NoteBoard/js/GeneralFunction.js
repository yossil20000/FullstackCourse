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
class Display{
    static Mobile = new Display('Mobile');
    static Tablet = new Display('Tablet');
    static Desktop = new Display('Desktop');
    name;
    constructor() {this.name = this.Mobile;}
    IsMobile(){
        return this.name ==  this.Mobile;
    }
    IsTablet(val) {
        return this.name == this.Tablet;
    }
    IsDesktop(val) {
        return this.name === this.Desktop;
    }
}
var mobileWidthQuery = getComputedStyle(document.documentElement).getPropertyValue('--mobile-width');
var tabletWidthQuery = getComputedStyle(document.documentElement).getPropertyValue('--tablet-width');
const deviceMobile = window.matchMedia(`(min-width:${mobileWidthQuery})`);
const deviceTablet = window.matchMedia(`(min-width:${tabletWidthQuery})`);
var typeScreen = new Display();
deviceMobile.addEventListener('change', handleDeviceChange);
deviceTablet.addListener(handleDeviceChange);
function handleDeviceChange(e){
    console.log(e.media.includes(mobileWidthQuery));
    if(e.matches && e.media.includes(mobileWidthQuery))
    {
        typeScreen.name = Display.Mobile;
            console.log(`match mobile ${mobileWidthQuery} typeScreen:${typeScreen.IsMobile()}`);
    }
    else if(!e.matches && e.media.includes(tabletWidthQuery)){
        typeScreen.name= Display.Tablet;
        console.log(`match ${tabletWidthQuery} typeScreen:${typeScreen.IsTablet()}`);
    }
    else {
        typeScreen.name = Display.Desktop;
        console.log(`match ${tabletWidthQuery} typeScreen:${typeScreen.IsDesktop()}`);
    }
}
handleDeviceChange(deviceMobile);
handleDeviceChange(deviceTablet);
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