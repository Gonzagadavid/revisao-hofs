// Você receberá um array de objetos (arrays associativos em PHP, tabelas em COBOL) representando
//  dados
// sobre desenvolvedores que se inscreveram para participar do próximo encontro de codificação que
//  você
//  está organizando.

// Sua tarefa é retornar um array onde cada objeto terá uma nova propriedade 'saudação' com o
// seguinte valor de string:

// Olá < firstName aqui >, o que você mais gosta em < language here >?

// function greetDevelopers(list) {
//    const callback = (obj) => {
//     const newObj = { ...obj };
//     newObj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
//     return newObj;
//   };

//   const result = list.map(callback)
//   return result
// }

const greetDevelopers = (list) => list.map((obj) => ({ ...obj, greeting: `Hi ${obj.firstName}, what do you like the most about ${obj.language}?` }));

const list = [
  { firstName: 'Fulano', language: 'Java' },
  { firstName: 'Cicrano', language: 'C#' },
  { firstName: 'Beltrana', language: 'C++' },
];

console.log('before ', list);
console.log('return ', greetDevelopers(list));
console.log('after ', list);
