const axious = require("axios").default;

let placeholder = function(url){
    axious.get(url).then(
        function (response){
            return response;
        }
    )
    .catch( function(err){

    })
    .then( function(){

    });
}

module.exports = {
    GetFromPlaceHolder : placeholder
}