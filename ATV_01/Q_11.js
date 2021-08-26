var p, x;
function percentual(p,x){
    return (x*(p/100));
}
const prompt = require('prompt-sync')();
p = prompt("Valor P:");
x = prompt("Valor X:");
p = parseInt(p);
x = parseInt(x);
console.log(p+" porcentos de "+x+" vale "+percentual(p,x));
