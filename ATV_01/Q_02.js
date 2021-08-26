var real, dolar, cotacao;
const prompt = require('prompt-sync')();
dolar = prompt('Digite o valor em U$$:')
cotacao = prompt('Digite a cotacao atual:')
real = dolar*cotacao;
console.log('Valor convertido: ' + real);
