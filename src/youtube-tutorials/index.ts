// FORMAS DE ITERAR UM ARRAY: for tradicional, for of, for in e foreach
const myFriends = [
  { name: "Marcus", age: 20 },
  { name: "Maria", age: 26 },
  { name: "Matheus", age: 30 },
  { name: "José", age: 15 },
  { name: "William", age: 23 },
];

// FOR tradicional
/*
WHAT TO KNOW ABOUT IT:

Através de um índice definido e controlado por nós, podemos percorrer o array
Definimos:
- O valor que o íncide inicia;
- O valor que o íncide termina;
- o passo a passo do incremento ou decremento deste índice.
Podemos quebrar o loop ou pular uma iteração.
*/
console.log("FOR Tradicional:");

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}
