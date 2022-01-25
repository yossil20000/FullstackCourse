console.log(process.argv);
const getFirstLetter = (word) => {
    return word[0];
}
const letter = getFirstLetter(process.argv[2]);
console.log(`Word:${process.argv[2]} the first letter is ${letter}`);