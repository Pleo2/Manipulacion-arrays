// aplana los array las veces que sean necesarios

const arrayR = [[0, 1], [1, 2], [[3, 4], [[5, 6], [7, 8]]]];

const arrayP = arrayR.flat(5);
console.log(arrayP);

// aplana el resultado de un map seria el equivalente de realizar un map y despues un flat 

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]
const attributes = users.map(user => user.attributes);
console.log(attributes);

const attributesFLat = users.flatMap(user => user.attributes);
console.log(attributesFLat);

// numere total de palabras que tiene el array
const mantra = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];
function CuantasPalabras(arr){
const separador = mantra
  .flatMap(n => n
  .split(" "))
  .length;

  console.log(mantra.flatMap(n => n));
  console.log(mantra.flatMap(n => n.split(' ')));
  console.log(mantra.flatMap(n => n.split(' ')).length);

  return separador
};
console.log(CuantasPalabras(mantra))
