--------------------------------------------------------------------------------------------
var s;
const prompt = require('prompt-sync')();
s = (prompt("String:"));
s = s.replace(/a/g,'');
s = s.replace(/e/g,'');
s = s.replace(/i/g,'');
s = s.replace(/o/g,'');
s = s.replace(/u/g,'');
s = s.replace(/A/g,'');
s = s.replace(/E/g,'');
s = s.replace(/I/g,'');
s = s.replace(/O/g,'');
s = s.replace(/U/g,'');
console.log(s);
