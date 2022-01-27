const jsonfile = require("jsonfile");

exports.getUsers = async () => {
  const data = await jsonfile.readFile("data.json");
  return data;
};
