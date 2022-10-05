// Se utiliza para unir los elementos con un separador en especifico

const element = ["🔥", "✈️", "🥛", "🌎"];
const separador = element.join(" _🍥_ ");
console.log(separador);
console.log(typeof separador);

// metodo split se utiliza para convertir un string en un array

const curso = "curso de manipulacion de array en javascript";
const unir = curso.split(" ");
console.log(unir);

const urlFinal = curso
  .split(" ")
  .join("-")
  .toLocaleLowerCase();

console.log(urlFinal);
