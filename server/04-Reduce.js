// reduce todo los elementos de un array a uno solo realizando una operacion

// for version 
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 150]
let suma = 0;

for (let index = 0; index < list.length; index++) {
  const element = list[index];
  suma += element;
}
console.log(suma)

// 🆚

// reduce Version // no usar reduce en lo posible
// el valor de el acumulado inicialmente se puede declarar si no se declara es igual a 0;
// (acumulado, element, index, array) otros parametros 
const listaReducida = list.reduce((acumulado, element) => acumulado + element, 0);
console.log(listaReducida) 

const time = [ 1, 3, 1, .5, .5, .5, 2, 3, 2.5, 1.5, 1, 0.5];

const TimeDay = time.reduce((acumulado, element) => acumulado + element );
console.log(TimeDay);

// todo mejores soluciones antes de usar array.reduce

// * case 1:

// Saber el numero mayor de un array

// Reduce ⚠️
const mayorN = list.reduce((acumulado, element) => {
  if (acumulado < element) {
    return element;
  }
  return acumulado;
}) 
console.log(mayorN);

// Mejor opcion Metodo Math.max(...array) 🥇
const listSumada = Math.max(...list);
console.log(listSumada)

// * case 2:

// Solo devolver pares y multiplicar por 2

// Reduce ⚠️
const listPpor2 = list.reduce((acumulado, element) => {
  if (element % 2 === 0) {
    return [...acumulado, element *2]
  }
  return acumulado;
  },[]);

  console.log(listPpor2);

// Metodo filter + map 🥇
const listPpor2Boost = list
.filter(n => n % 2 === 0)
.map(n => n * 2);

console.log(listPpor2Boost)

// Reduce is bad ? ☣️
// 🚫 yes