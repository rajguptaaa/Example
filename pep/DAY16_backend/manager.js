const { sumArray } = require('./teamA');
const {Sum} = require('./teamB')

const value = [10, 20, 30, 40];

const ans = sumArray(value);

console.log(ans);

let total = Sum(100, 200); 
console.log(total);




//in node JS :- 
//import/require will run the imported/required file line by line 
// regardless if the function is called or not frmo the file being imported
// first time requiring a file its runs line by line 2nd time it stores the cache //CACHING and remembers the prev output 