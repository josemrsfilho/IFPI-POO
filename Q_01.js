function sucessor(num){
    num++;
    return num;
}
function antecessor(num){
    num--;
    return num;
}
const prompt = require('prompt-sync')();
let numero = prompt('Digite um numero:')
console.log(`NÚMERO: ${numero}`);
console.log('SUCESSOR:' + sucessor(numero));
console.log('ANTECESSOR:' + antecessor(numero));