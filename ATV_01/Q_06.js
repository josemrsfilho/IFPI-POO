var i, soma;
i = 0;
soma =0;
const prompt = require('prompt-sync')();
while(i != -1){
    soma = parseInt(soma);
    i = parseInt(i);
    soma +=i;
    i = parseInt(prompt("Digite um número:"));
}
console.log(soma);
