// devuelve el primer elemento que de mach con la condicion
// si es un array de objeto regresa el objeto completo
const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🍕",
  },
];

const breakfast = products.find((obj) => obj.id === "🍕");
console.log(breakfast);

// Si se necesita la posicion de el elemento se utiliza findIndex
// Si no encuentra el elemento return -1
const breakfastIndex = products.findIndex((obj) => obj.id === "🍔");
console.log(breakfastIndex);
