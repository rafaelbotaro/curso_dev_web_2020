// Operadores Aritméticos

var num1 = 9;
var num2 = 2;

document.write('Soma de '+num1+ ' + '+num2+' = '+(num1 + num2)+'<br><br>');
document.write('Subtração de '+num1+ ' - '+num2+' = '+(num1 - num2)+'<br><br>');
document.write('Multiplicação de '+num1+ ' x '+num2+' = '+(num1 * num2)+'<br><br>');
document.write('Divisão de '+num1+ ' / '+num2+' = '+(num1 / num2)+'<br><br>');
document.write('Módulo de '+num1+ ' % '+num2+' = '+(num1 % num2)+'<br><br>');
document.write('Incremento posterior de '+(num1++)+'<br>');
document.write('Resultado do incremento posterior: '+num1+'<br><br>');
document.write('Decremento posterior de '+(num1--)+'<br>');
document.write('Resultado do decremento posterior: '+num1+'<br><br>');
document.write('Incremento anterior de '+num1+' é '+(++num1)+'<br><br>');
document.write('Decremento anterior de '+num1+' é '+(--num1)+'<br><br><br>');


// Operações aritméticas na atribuição de valores

document.write('<strong>Operadores Aritméticos na atribuição de valores</strong><br><br>')

var teste = 10;
teste = teste + 5;
document.write('Soma = '+teste+'<br><br>');

var teste1 = 10
teste1 += 5;
document.write('Soma = '+teste1+'<br><br>');

teste1 -= 5;
document.write('Subtração = '+teste1+'<br><br>');

teste1 *= 5;
document.write('Multiplicação = '+teste1+'<br><br>');

teste1 /= 5;
document.write('Divisão = '+teste1+'<br><br>');

teste1 %= 5;
document.write('Módulo = '+teste1+'<br><br>');

var teste2 = 'Olá, ';   // Pode ser usado com String também
teste2 += 'Rafael!';
document.write(teste2);
