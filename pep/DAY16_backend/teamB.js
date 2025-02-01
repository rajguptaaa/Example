//React is just a JS library
// NodeJS is a JS runtime



//custom module
function Sum(a, b){
    return a+b;
}

function Mul(a, b){
    return a*b;
}

module.exports = {
    Sum,
    Mul:Mul
}
