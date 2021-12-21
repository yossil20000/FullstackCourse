const myForm = document.getElementById('shahar-form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById('password');

myForm.addEventListener('submit',checkInput);

function checkInput(ea){
    ea.preventDefault();
    emailInput.value = "yossi";
    // one way to cheeck validation is to use if stataments
    // the other way is to uset regular expression
    console.log(ea);
}
rejexByClass()
function rejex()
{
    const pattern = /[A-Z][a-z]+ [A-Z][a-z]+/g;
    let str1 = 'A1 A2';
    if(pattern.test(str1))
        alert('match')
    else
        alert('not match')
    str1 = 'Ab Bc';
    if(str1.match(/[A-Z][a-z]+ [A-Z][a-z]+/g))
    {
        alert('match')
    }
    else{
        alert('not match')
        
    }
    let re = new RegExp(/\w+@\w+\.\w+/,'g');
    console.log(re.exec('yo@g.com'));



}
function rejexByClass()
{
    
    let re = new RegExp(/\w+@\w+\.\w+/,'g');
    console.log(re.exec('yo@g.com'));

    console.log(re.exec('yog.com'));
    console.log(re.exec('yo@gcom'));

}