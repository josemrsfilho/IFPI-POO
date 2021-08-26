var vetor = new Array();
var i, apontador, qtd_pares;
const prompt = require('prompt-sync')();
apontador = 0;
apontador = parseInt(apontador);
pares = 0;
pares = parseInt(pares);
while(apontador <= 19){
    i = (prompt("Posição "+apontador+" do vetor:"));
    vetor.push(i);
    apontador++;
}
apontador = 0;
while(apontador <= 19){
    if(vetor[apontador]%2==0){
    pares++;
    }
    apontador++;
}
console.log(vetor);
console.log("Quantidade de pares: "+ pares);
