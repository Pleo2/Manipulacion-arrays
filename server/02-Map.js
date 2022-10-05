// Crear un new array a partir de uno original mediante una function callback & es inmutable, conservando asi el mismo numero de elementos dentro de el array

array = [3, 4, 5, 6, 7, 8, 9, 10, 11];

arrayFor = [];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  const result = element * 5;
  arrayFor.push(`hola ${result}`);
}
arrayFor;

// Aplicacion con map.
mapArray = array.map((n) => {
  const result = n * 5;
  return `hola ${result}`;
});
mapArray;

// Esta es la forma de agregar un nuevo key dentro de un objeto que se encuentra dentro de un array mutandolo
const objeto = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
  },
];

function solution(objeto) {
  return objeto.map((element) => ({
    ...element,
    taxes: element.price * 0.19,
  }));
}

console.log(objeto);
console.log(solution(objeto));
