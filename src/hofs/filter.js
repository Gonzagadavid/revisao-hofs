// retorna novo array filtrado de acordo com a condição passada na callback

// onde é chamada a callback dentro do if que faz o push

// callback espera uma condição

function myFilter(array, callback) {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    if (callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

const number = [1, 2, 3, 4, 5, 6, 7, 8];

const cb = (item) => item % 2 !== 0;

const odd = myFilter(number, cb);

console.log(odd);
