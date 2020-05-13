/* 
    Operadores Lógicos

    E -> && - É verdadeiro se todas as expressões forem verdadeira
    OU -> || - É verdadeiro se pelo menos uma expressão for verdadeira
    NÃO -> ! - Inverte o resultado da expressão de comparação

*/

var nota = parseFloat(prompt('Digite a nota do aluno: '));
var faltas = parseInt(prompt('Digite as faltas do aluno: '));

if((nota < 0 || nota > 10) && (faltas < 0)){
    document.write('Dados incorretos!');
}else if((nota < 0 || nota > 10) && (faltas >= 0)){
    document.write('Dados incorretos!');
}else if((nota >= 0 || nota <= 10) && (faltas < 0)){
    document.write('Dados incorretos!');
}else if(nota >= 7 && faltas <= 10){
    document.write('Aluno aprovado');
}else if((nota >= 7) && (faltas > 10 && faltas < 15)){
    document.write('Reposição de aulas');
}else if((nota <= 6.99 && nota >= 5) && (faltas <= 10)){
    document.write('Aluno em recuperação');
}else if((nota <= 6.99 && nota >= 5) && (faltas > 10 && faltas < 15)){
    document.write('Aluno em recuperação e com reposição de aulas');
}else if((nota <= 6.99 && nota >= 5) && (faltas >= 15)){
    document.write('Aluno reprovado');
}else if(nota >= 7 && faltas >= 15){
    document.write('Aluno reprovado');
}else if(nota <= 4.99){
    document.write('Aluno reprovado');
}