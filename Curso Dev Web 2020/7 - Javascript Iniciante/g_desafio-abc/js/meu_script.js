var a = 10;
var b = 20;
var c = null;

document.write('A = '+a+'<br>');
document.write('B = '+b+'<br>');
document.write('C = '+c+'<br><br>');

document.write('Invertendo...<br><br>')

c = b;
b = a;
a = c;
c = null;

document.write('A = '+a+'<br>');
document.write('B = '+b+'<br>');
document.write('C = '+c+'<br>');