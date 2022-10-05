// for version 🆚

let words2 = ['hi', 'love', 'ppppppp', 'honah', 'ausaon', 'asnu'];
let smallWords2 = [];

for (let index = 0; index < words2.length; index++) {
  const element = words2[index];
  if (element.length <= 4) {
    smallWords2.push(element);
  }
}
console.log(smallWords2);

// Crea un new array con las propiedades que cumplan con el filtro utilizado es inmutable.

// const comida = [ 🍳, 🍔, 🌮, 🥦, 🥗, 🍕];
// const comidaSaludable.filter(healthy food);
// console.log(comidaSaludable) ==> [ 🍳, 🥦, 🥗,]

const words = ['hi', 'love', 'goodbye', 'hello', 'howAreYou', 'goodMorning'];

const smallWords = words.filter(element => element.length <= 4);
console.log(smallWords);

// 🆕
// filter with objetos 

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]
const deliveredOrders = orders.filter(element => element.delivered && element.total < 200)
console.log(deliveredOrders)
// cumple con la condicion de true and cumple con la condicion de tener un total menor a 150

// podemos generar a partir de un query cuales ordenes de compra tienen el nombre de ese cliente creando asi un buscador

const search = (query) => {
  return orders.filter(element => {
    return element.customerName.includes(query);
  }); 
};
console.log(search('Valentina'))