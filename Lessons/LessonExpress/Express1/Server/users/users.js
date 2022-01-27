const jsonFile = require("jsonfile");

const getUsers = async function(){
    const data = await jsonFile.readFile('./server/data/data.json');
    return data;
}

module.exports = {
    getUsers: getUsers
}
