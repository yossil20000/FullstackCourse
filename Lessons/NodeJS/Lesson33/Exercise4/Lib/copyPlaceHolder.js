const axious = require("axios").default;

let placeholder = async function(url){
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
let placeHolderAsync =  function(url){
    try{
        const response =  axious.get(url);
        console.log(response);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

const func = async (req,res) => {
    const dataUrl = await axios.get(url);
    return dataUrl.data;
}

module.exports = {
    GetFromPlaceHolder : placeholder,
    GetFromPlaceHolderAsync: placeHolderAsync
}