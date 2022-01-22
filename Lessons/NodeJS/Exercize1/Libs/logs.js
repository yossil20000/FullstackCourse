var log = {
    called:"",
    info:function(info){
        console.log(`${this.called}:Info: ${info}`);
    },
    warning: function(warning){
        console.warning(`${this.called}:Warning: ${warning}`);
    },
    error: function(error){
        console.error(`${this.called}:Error: ${error}`);
    }
}

/* exports.Log = log;
exports.From = "logs.js"; */
 module.exports = {
    Log: log,
    From: "logs.js"
};
