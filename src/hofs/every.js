// retorna booleano

// onde é chamada a callback => dentro do if

// callback espera condição

const array1 = [1, 3, 5, 6, 7, 9];
const array2 = [1, 3, 5, 7, 9];

function myEvery(array, callback) {
  let result = true;
  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    if (!callback(item)) {
      result = false;
    }
  }

  return result;
}

console.log([].every(() => false));

// const cb = (item) => item % 2 !== 0;

// console.log(myEvery(array1, cb));
// console.log(myEvery(array2, cb));

// console.log(array1.every(cb));
// console.log(array2.every((item) => item % 2 !== 0));
