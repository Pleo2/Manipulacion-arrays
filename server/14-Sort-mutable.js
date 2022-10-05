// Ordenar los elementos dentro de un array.

const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

// Ordena de manera alfabetica 📆 dependiendo el ASCII
const sortmonths = months.sort();
console.log(sortmonths);

// Ordenar numeros 
// Ordenar de menor a mayor => a - b
// Ordenar de mayor a menor => b - a
const sortnumbers = numbers.sort((a, b) => a - b);
console.log(sortnumbers);

// Ordenar Caracteres especiales
const sortCaracteres = words.sort((a, b) => a.localeCompare(b));
console.log(sortCaracteres)

// Ordenar objetos dentro de un array 
// la a, b representan el primer y segundo obj dentro de el array mienstras se realiza el recorrido
const sortObj = orders.sort((a, b) => a.total - b.total);
console.log(sortObj);

