// fusiona 2 array de forma inmutable

const array1 = [1, 8, [3, 2]];
const array2 = [8, 9, 10, 11, 12];

const arrayFusion = array1.concat(array2);
console.log(arrayFusion);

// solo con array o objetos tambien se utiliza:
const arraySplicOperation = [...array1, ...array2];
console.log(arraySplicOperation);

// version mutable

array1.push(array2);
console.log(array1);
const arrayMutado = array1.flat();
console.log(arrayMutado);
