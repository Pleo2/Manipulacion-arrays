// Crear historiama para calcular la moda con reduce
const list = [2, 3, 4, 4, 4, 2, 2, 2, 2];

const frecuency = list.reduce((key, value) => {
  console.log(key);
  console.log(value);
  console.log(key[value]);
  if (!key[value]) {
    key[value] = 1;
  } else {
    key[value] += 1;
  }
  console.log(key);
  return key;
}, {});
console.log(frecuency);

const frecuenciasArr = Object.entries(frecuency).sort((a, b) => a - b);
console.log(frecuenciasArr);

const frecuenciasArrOrdenadas = frecuenciasArr.sort((a, b) => b[1] - a[1]);
console.log(frecuenciasArrOrdenadas);

const elementoQmasSeRepite = frecuenciasArrOrdenadas[0];
console.log(elementoQmasSeRepite);
console.log(elementoQmasSeRepite[0]);

// crear historama por rango
const listR = [2, 2, 6, 4, 1, 11, 12];

const frecuenciaRango = listR.reduce(
  (objeto, value) => {
    console.log(objeto);
    console.log(value);
    if (value <= 4) {
      objeto["1-4"] += 1;
    } else if (value <= 9) {
      objeto["4-9"] += 1;
    } else {
      objeto["9-15"] += 1;
    }

    return objeto;
  },
  {
    "1-4": 0,
    "4-9": 0,
    "9-15": 0,
  }
);

console.log(frecuenciaRango);

// historama par o impar "saber la cantidad de pares e impares"
function calcularPar(arr) {
  const frecuenciaPoI = arr.reduce(
    (key, value) => {
      if (value % 2 === 0) {
        key["par"] += 1;
      } else {
        key["impar"] += 1;
      }
      return key;
    },
    {
      par: 0,
      impar: 0,
    }
  );
  return frecuenciaPoI;
}

console.log(calcularPar([1, 7, 8, 10, 12, 16]));

// crear historiama dentro de un array de obj
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const Nivel = data
  .map((n) => n.level)
  .reduce((level, value) => {
    if (!level[value]) {
      level[value] = 1;
    } else {
      level[value] = level[value] + 1;
    }
    return level;
  }, {});

console.log(Nivel);
