var valor1, valor2, valor3;
const prompt = require('prompt-sync')();
valor1 = prompt('Digite o primeiro valor:');
valor2 = prompt('Digite o segundo valor:');
valor3 = prompt('Digite o terceiro valor:');
valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3);
if(valor1 < valor2 && valor1 < valor3){
    console.log("O menor dentre os valores lidos é "+valor1);
}else if(valor2 < valor1 && valor2 < valor3){
    console.log("O menor dentre os valores lidos é "+valor2);
}else{
    console.log("O menor dentre os valores lidos é "+valor3);
}
