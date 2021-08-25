var vetor = new Array();
var i, apontador;
const prompt = require('prompt-sync')();
apontador = 0;
apontador = parseInt(apontador);
while(apontador <= 4){
    i = (prompt("Posição "+apontador+" do vetor:"));
    vetor.push(i);
    apontador++;
}
console.log(vetor);