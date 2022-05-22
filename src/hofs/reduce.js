// retorna o que você quiser

// onde é chamada a callback

// callback espera
const numbers = [3, 2, 4, 5, 8, 9];

const words = ['trybe', 'school', 'code', 'wars', 'trybe', 'code', 'wars', 'trybe'];

function countWords(array) {
  const result = {};

  for (let index = 0; index < array.length; index += 1) {
    const word = array[index];
    if (result[word]) {
      result[word] += 1;
      continue;
    }
    result[word] = 1;
  }

  return result;
}

console.log(countWords(words));
function myReduce(array, callback, initialAcc) {
  const isAcc = initialAcc === 0 || initialAcc === '' || !!initialAcc;
  let acc = isAcc ? initialAcc : array[0];
  const start = isAcc ? 0 : 1;
  for (let index = start; index < array.length; index += 1) {
    const crr = array[index];
    acc = callback(acc, crr);
  }
  return acc;
}
const cb = (acc, crr) => {
  if (acc[crr]) {
    acc[crr] += 1;
    return acc;
  }
  acc[crr] = 1;
  return acc;
};

console.log(words.reduce(cb, {}));

console.log(myReduce(words, cb, {}));
// -------=---------=----
// const cb = (acc, crr) => acc + crr;

// console.log(myReduce(numbers, cb, 5));

// [].reduce((acc, crr, i, arr) => {}, acc)
