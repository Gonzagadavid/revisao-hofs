// retorna o o primeiro item do array que satisfaça a condição passada na callback

// onde é chamada a callback

// callback espera uma condição

function myFind(array, callback) {
  let finded;

  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    if (callback(item) && !finded && finded !== 0 && finded !== '') {
      finded = item;
    }
  }

  return finded;
}

const numbers = [1, 3, 5, 6, 7, 8];

const cb = (item) => item % 2 === 0;

const result = myFind(numbers, cb);

console.log(result);
