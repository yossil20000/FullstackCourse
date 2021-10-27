function logintest(){
    var user =  loginuser();
    var password =  loginpass();
    if (user == "admin" && password == "123456")
    return alert("Login successfully")
    else
    return alert("Login failed")
    }

function loginuser(){
   
    return document.getElementById("username").value;
}
function loginpass(){
    return document.getElementById("pass").value;
}