// Você receberá um array de objetos (arrays associativos em PHP, tabelas em COBOL) representando 
// dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de codificação
//  que você está organizando.

// Sua tarefa é retornar:

// truese todos os desenvolvedores no código da lista estiverem no mesmo idioma; ou
// falsepor outro lado.
// Por exemplo, dado o seguinte array de entrada:

function isSameLanguage(list) {
  let result = true

  const cb = (item) =>list[0].language === item.language

  for(let i = 0; i < list.length; i += 1) {
    const item = list[i]
    if(!cb(item)) result = false
  }

  return result
}

const list1 = [
  {
    firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript',
  },
  {
    firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript',
  },
  {
    firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript',
  },
];

const isSameLanguage = (list) => list.every((item) => list[0].language === item.language);


// -------------------------------------------------------------

// Você receberá uma sequência de objetos (arrays associativos em PHP) representando dados sobre 
// desenvolvedores que se inscreveram para participar do próximo encontro de codificação que você
//  está organizando.

// Sua tarefa é retornar:

// truese todos os seguintes continentes / zonas geográficas forem representados por pelo menos 
// um desenvolvedor: 'África', 'Américas', 'Ásia', 'Europa', 'Oceania'.
// falsepor outro lado.
// Por exemplo, dado o seguinte array de entrada:



// function allContinents(list) {
//   const continents = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  
  
//   const everyCB = (continent) => {
//   const someCB = (dev) => dev.continent === continent
//     return list.some(someCB)
//   }
//   return continents.every(everyCB)
// }

const list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

// function allContinents(list) {
//   const continents = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
//    let resultEvery = true
   
//    const everyCb = (continent) => {
//      let resultSome = false
     
//      const someCb = (devData) => devData.continent === continent
//      for (let i = 0; i < list.length; i += 1) {
//        const devData = list[i]
//        if(someCb(devData)) {
//          resultSome = true
//        }
//      }
     
//      return  resultSome
//    }
   
   
//    for(let i = 0; i < continents.length ; i += 1) {
//      const continent = continents[i]
//      if(!everyCb(continent)) {
//        resultEvery = false
//      }
//    }
  
//   return resultEvery
   
//   }

const allContinents = (list) => [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every((continent) => list.some((devData) => devData.continent === continent))
