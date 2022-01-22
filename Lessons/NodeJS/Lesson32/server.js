const divide = require("./serverMath");
const mathExport = require("./serverMathExport");

console.log(`divide from server: ${divide.Yossi(5 , 2)}`);
console.log(`mathExport.divide(6 , 2): ${mathExport.divide(6 , 2)}`);
console.log(`mathExport.mul(6 , 2): ${mathExport.mul(6 , 2)}`);
console.log(`mathExport.yossi(6 , 2): ${mathExport.yossi(6 , 2)}`);
console.log(`mathExport.yossi.getLenght("6 ,  2"): ${mathExport.yossi.getLenght("6 ,  2")}`);
console.log(`mathExport.yossi.trimSpace("6 ,  2"): ${mathExport.yossi.trimSpace("6 ,  2")}`);
const names = [ "A","BB", "CCC"];
console.log(names);
console.log(`mathExport.yossi.CharsInArray ${names}: ${mathExport.yossi.CharsInArray(names)}`);

const pali = "1233321";
console.log(`${pali} : ${mathExport.yossi.isPalindrom(pali)}`);