/*
    A condicional IF/ELSE verifica se uma ou mais condições são verdadeiras ou falsas e, a partir dessa verificação, segue um determinado fluxo no programa
*/

let nota = parseFloat(prompt('Digite a nota do aluno: '));

const media = 7;

if(nota > 10 || nota < 0){
    document.write('Nota Inválida!')
}else if(nota <= 10 && nota >= 7){
    document.write('Aluno Aprovado<br>');
}else if(nota <= 6.99 && nota >= 5){
    document.write('Aluno de Recuperação<br>');
}else{
    document.write('Aluno Reprovado<br>');
}
