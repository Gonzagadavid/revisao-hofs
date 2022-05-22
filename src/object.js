const obj = {};

const key = 'a';

obj[key] = '1';

console.log(obj);

const obj2 = obj;

obj2.c = '3';

console.log(obj2);
console.log(obj);
