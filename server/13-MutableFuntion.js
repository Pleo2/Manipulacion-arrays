// metodo Splice elemina un element si es le da el index + la cantidad de veces a eliminar esa posicion
const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

const productindex = products.findIndex((el) => el.id === "🍔");
if (productindex !== -1) {
  myProducts.push(products[productindex]);
  products.splice(productindex, 1);
}

console.log("products", products);
console.log("myProducts", myProducts);


