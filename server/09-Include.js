// Verificar si este elemento esta dentro o no de el array
// solo toma como parametro el nombre de el elemento dentro de el array

const animals = ["dog", "cat", "bird", "kinoko"];

const result = animals.includes("dog");
console.log(result);

const search = (query) => {
  return animals.includes(query);
};
console.log(search("cat"));

// Si se annado filter Return el array contenedor no hace una busqueda a profundidad 
const searchAndReturn = (query) => {
  return animals.filter((item) => {
    return animals.includes(query);
  });
};

console.log(searchAndReturn("dog"));
