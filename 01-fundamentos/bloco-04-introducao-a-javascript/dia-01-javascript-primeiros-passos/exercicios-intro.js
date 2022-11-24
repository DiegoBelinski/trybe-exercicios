/* - Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
- Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
- Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
- Utilize o console.log() para imprimir as constantes e variáveis que você criou.
- Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) 
novamente para ver o que acontece!
- Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! 
Você saberia explicar por que recebemos uma mensagem de erro?  */


const myName = "Diego";
const birthCity = "Osasco";
let birthYear = 1987;

console.log(myName, birthCity, birthYear);
birthYear = 2030;
console.log(birthYear);
birthCity = "Sao Paulo";
console.log(birthCity);
/* 
Aparece mensagem de erro pois nao e possivel alterar uma Constante */




/* Exercicio 2 

Crie uma constante chamada base e atribua a ela o valor 5.
Crie uma constante uma chamada heigth e atribua a ela o valor 8.
Crie uma constante chamada area e atribua a ela o resultado da multiplicação da 
base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as
variáveis e checar os resultados das operações!
Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
 */


const base = 5;
const heigth = 8;
const area = base * heigth;
console.log(area);
const perimeter = base + base + heigth + heigth;
console.log(perimeter)




/* Exercicio 03

Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito
comum na sua carreira de pessoa desenvolvedora. Então vamos praticar essa habilidade tão 
importante?

Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua 
a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa 
pessoa está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
Se a nota for menor que 60, imprima “Você foi reprovada(o)”
Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo,
e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam.
 */

const nota = 80;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
 } else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
 } else {
    console.log("Você foi reprovada(o)");
 }



/* 
 Exercicio 04

 Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha,
 para representar as horas do dia.

Crie uma variável chamada “message” que, inicialmente, é uma string vazia.

Implemente condicionais para que:

Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” 
na variável “message”.

Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos 
jantar :D” na variável “message”.

Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro 
café da tarde?” na variável “message”.

Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.

Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na
variável “message”.

Agora imprima a variável message fora das suas condições. */

const currentHour = 15;
let message = " ";

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour <11) {
    message = 'Hmmm, cheiro de café recém-passado'
}    

console.log(message)


