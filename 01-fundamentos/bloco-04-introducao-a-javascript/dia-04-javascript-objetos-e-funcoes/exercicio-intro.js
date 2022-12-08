/* Objetos */
/*
Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: { golden: 2, silver: 3 };
bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log ( ' A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade').


Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

console.log(' A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita melhor do mundo por ' + player.bestInTheWorld.length + ' vezes')


Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

console.log(' A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')
*/



/* FOR / IN */
/*
Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for ( let index in names) {
  console.log('Ola ' + names[index])
}



Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let index in car) {
  console.log(index, car[index])
}
*/






/* Funcoes */
/*
Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero (a,b) {
 if (a > b) {
  console.log(a + ' e o maior numero')
 } else {
  console.log(b + ' e o maior numero')
 }
}
return maiorNumero(410,118)




Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function maiorNumero (a,b,c) {
 if (a > b && a > c) {
  console.log(a + ' e o maior numero')
 } else if ( b > a && b > c) {
  console.log(b + ' e o maior numero')
 } else {
  console.log(c + ' e o maior numero')
 }
}
return maiorNumero(5,2,15)





Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
function positiveNegative (a) {
 if ( a < 0 ) {
  return 'Numero é negativo';
 } else if (a > 0) {
  return 'Numero é positivo';
 } else {
  return 'O numero e zero';
 }
}

console.log (positiveNegative(0))
*/
