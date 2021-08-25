var s, a, b;
const prompt = require('prompt-sync')();
s = (prompt("String:"));
a = (prompt("Letra 1:"));
b = (prompt("Letra 2:"));
s = s.replace(a,b);
console.log(s);