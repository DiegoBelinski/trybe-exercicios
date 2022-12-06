/* Modifique a variável para que respeite o escopo onde está sendo declarada. 
Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível 
fora do escopo em que esteja sendo declarada.

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
}
  imprimeIdade()
 */

/* ________________________________________________________________________________________ */
/* 🚀 Altere o valor das propriedades do objeto, para que respeite
 as características da variável do tipo const;


const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa2 = {
    nome: 'Luna',
    idade: 19
  } 
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);
 */

/* ________________________________________________________________________________________ */
/* Modifique a variável para que não ocorra Erro;


let favoriteFood = 'Lasanha';
  favoriteFood = 'Hamburguer';
  console.log(favoriteFood);
 */


/* ________________________________________________________________________________________ */
/* Modifique as concatenações para template literals */
/* 
const firstName = 'Adriana';
const lastName = 'Soares';

console.log(`Olá ${firstName} ${lastName}!`);



function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;


console.log(`O resultado da soma de ${a} + ${b} é: ${soma}`);


??????????????????????????????????????????????????? */

/* ________________________________________________________________________________________ */

/* Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

🚀 Transforme a função numeroAleatorio em uma arrow function;
 */
/* 
const numeroAleatorio = ( ) => Math.random
  console.log(numeroAleatorio(Math));

????????????????????????????????????????????????? */

/* ________________________________________________________________________________________ */

/* 🚀 Transforme a função nomeCompleto em uma arrow function; */

/* const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
 
console.log(nomeCompleto('Ivan','Pires'));
 */

/* ________________________________________________________________________________________ */
/* 
Altere a expressão if/else utilizando ternary operator; */

let speed = 130;

const speedCar = (speed) => (speed >= 120)? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`; 

console.log(speedCar(speed));