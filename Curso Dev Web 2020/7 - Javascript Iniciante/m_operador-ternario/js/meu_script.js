/* 
    Operador Ternário
*/

var nota = parseFloat(prompt('Digite a nota do aluno: '));
var faltas = parseInt(prompt('Digite as faltas do aluno: '));

var media = 7;
var maxFaltas = 15;

var resultado = ((nota >= media) && (faltas <= maxFaltas)) ? 'Aprovado' : 'Reprovado';

document.write(resultado);
