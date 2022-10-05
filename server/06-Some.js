// Filtra para saber si un array contiene la condicion devolviendo un boolean

const list = [1, 3, 5, 7, 2];

const arrayConPar = list.some((n) => n % 2 === 0);

console.log(arrayConPar);
