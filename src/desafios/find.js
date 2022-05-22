// Você receberá um array de objetos (arrays associativos em PHP) representando dados sobre
// desenvolvedores que se inscreveram para participar do próximo encontro de codificação que você
//  está organizando. A lista é ordenada de acordo com quem se inscreveu primeiro.

// Sua tarefa é retornar uma das seguintes strings:

// < firstName here >, < country here > do primeiro desenvolvedor Python que se inscreveu; ou
// There will be no Python developersse nenhum desenvolvedor Python se inscreveu.

// function getFirstPython(list) {
//   const cb = (dev) => dev.language === 'Python'
//   const devPython = list.find(cb)

//   return devPython ? `${devPython.firstName}, ${devPython.country}` : 'There will be no Python developers'
// }

// function getFirstPython(list) {
//   const devPython = list.find((dev) => dev.language === 'Python');
//   const location = `${devPython.firstName}, ${devPython.country}`;

//   return devPython ? location : 'There will be no Python developers';
// }

function getFirstPython(list) {
  const { firstName, country } = list.find(({ language }) => language === 'Python');
  const location = `${firstName}, ${country}`;

  return devPython ? location : 'There will be no Python developers';
}
