function login(userName,password){
    if(userName.toLowerCase() == "admin" && password == "123456")
    {
        return "Logging Succeed";
    }
    return "One of the parameter is invalid";
}

var userNameBad = login("yossi", "123456");
var passwordBad = login("admin","1222");
var good = login("admin","123456");
