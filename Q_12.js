var h, m, s, segundos, restante;
function conversor(segundos){
    segundos = parseInt(segundos);
        h = segundos / 3600;
        resto = segundos % 3600;
        m = resto / 60;
        s = resto % 60;
    return console.log(h.toFixed(0)+":"+m.toFixed(0)+":"+s.toFixed(0));
}
const prompt = require('prompt-sync')();
valor = prompt("Insira um valor em segundos:");
conversor(valor);