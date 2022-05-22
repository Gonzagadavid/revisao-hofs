/* eslint-disable no-nested-ternary */
// retorna o array original oredenado de acordo com a callback

// onde é chamada a callback

// callback espera

const numbers = [9, 8, 3, 4, 5, 1];
const letters = ['b', 'n', 'h', 'z', 'a', 'r'];
const words = ['Fulano', 'Cicrana', 'Fernanda', 'Beltrana'];
const dev = [
  { name: 'Fulano', age: 30 },
  { name: 'Cicrana', age: 28 },
  { name: 'Fernanda', age: 29 },
  { name: 'Beltrana', age: 29 },
];

numbers.sort((a, b) => a - b);

// console.log(numbers);
const check = (a, b) => (a < b ? -1 : 0);
letters.sort((a, b) => (a > b ? 1 : check(a, b)));

words.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

// console.log(letters);
// console.log(words);

dev.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
console.log(dev);

dev.sort((a, b) => (a.age > b.age ? 1 : a.age < b.age ? -1 : 0));

console.log(dev);
