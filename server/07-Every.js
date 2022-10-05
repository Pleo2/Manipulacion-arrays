// 🏷️ Todos los elementos deben cumplir con la condiccion

const list = [1, 2, 3, 4, 5, 6, 7, 8];

const isMinor = list.every((n) => n < 10);

console.log(isMinor);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const teamIs = team.filter((element) => element.age).every((n) => n < 30);

console.log(teamIs);
