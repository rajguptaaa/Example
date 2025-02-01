
// const fun = require('./teamB') 
const {Sum} = require('./teamB'); //destructuring {Sum , Mul}

// const a = Sum(10, 20);
// const b = Mul(10, 20);
// console.log(a);
// console.log(b);

const sumArray = (arr) => {
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total = Sum(total, arr[i]);
    }
    return total;
}

module.exports = {
    sumArray,
}