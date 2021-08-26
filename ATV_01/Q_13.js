var contador, n, d, i; 
var quantidade = 0;
function one(n,d){
    quantidade = parseInt(quantidade);
    for(i = 0 ;i <= n.length; i++){
        if(n[i] == d){
            quantidade++;
        }
    }
    return console.log(quantidade);
}
const prompt = require('prompt-sync')();
n = prompt("Insira um valor para \'n'\:");
d = prompt("Insira um valor para \'d'\:");
one(n,d);
