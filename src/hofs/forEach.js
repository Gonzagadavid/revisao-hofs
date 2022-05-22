// retorna nada

// onde é chamada a callback dentro for

// callback espera o que você quiser

const array1 = [1, 3, 5, 6, 7, 9];

function myForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    callback(item);
  }
}

const mult = [];

array1.forEach((n) => {
  mult.push(n * 2);
});
