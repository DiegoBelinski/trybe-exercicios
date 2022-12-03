Percorra o array imprimindo todos os valores nele contidos com a função console.log();

 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index of numbers) {
    console.log(index)
}






Some todos os valores contidos no array e imprima o resultado; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for(let index=0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

console.log(sum); 





Calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for(let index=0; index < numbers.length; index += 1) {
    sum +=numbers[index];
}

console.log(sum/numbers.length);





Com base no código que acabou de gerar, faça com que, caso o valor final seja 
maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a 
mensagem: “valor menor ou igual a 20”;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for(let index=0; index < numbers.length; index += 1) {
    sum +=numbers[index];
}

if( sum >=20 ) {
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor que 20')
} 
 




Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;
for (let index = 0; index < numbers.length; index ++) {
   if ( numbers[index] > maior ) {
      maior = numbers[index];
   }
}

console.log(maior)






Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}





Utilizando for, descubra qual o menor valor contido no array e imprima-o;
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers [0];
for (let index = 0; index < numbers.length; index ++) {
   if ( numbers[index] < menor ) {
      menor = numbers[index];
   }
}

console.log(menor)





Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [ ];

for (let index = 1; index <= 25 ; index += 1) {
  numbers.push(index)
}
  
console.log(numbers)





Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um 
dos elementos por 2.

  for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };
