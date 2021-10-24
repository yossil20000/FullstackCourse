function login(userName,password){
    if(userName == undefined )
    userName = document.getElementById("login-name").value;
    if(password == undefined)
        password = document.getElementById("login-password").value;
    if(userName == null || password == null)
        {SetLoginMessage("One of the parameter is invalid");    return "";}
    if(userName.toLowerCase() == "admin" && password == "123456")
    {
        SetLoginMessage("Logging Succeed");
        return "Logging Succeed";
    }
    SetLoginMessage("One of the parameter is invalid");
    return "One of the parameter is invalid";
}
function SetLoginMessage(message)
{
    document.getElementById("form-login-validation").innerHTML = `<span style='color: red;'>${message}</span>`;
}

/* var userNameBad = login("yossi", "123456");
var passwordBad = login("admin","1222");
var good = login("admin","123456"); */
