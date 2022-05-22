// retorna um novo array com a mesma quantidade de itens do array passado

// onde é chamada a callback no push do novo array

// callback espera a modificação para cada item do array

function myMap(array, callback) {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    newArray.push(callback(item));
  }
  return newArray;
}

const numbers = [2, 5, 6, 3, 4];

const cb = (item) => item * 2;

console.log(myMap(numbers, cb));
