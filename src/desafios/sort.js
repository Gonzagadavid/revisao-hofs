// Escreva uma função que retorne a matriz classificada em ordem alfabética pela linguagem
// de programação. Caso existam alguns desenvolvedores que codifiquem no mesmo idioma,
// classifique-os em ordem alfabética pelo primeiro nome:

function sortByLanguage(list) {
  list.sort((a, b) => (
    a.language > b.language
      ? 1 : a.language < b.language
        ? -1 : a.firstName > b.firstName
          ? 1 : a.firstName < b.firstName
            ? -1 : 0));
  return list;
}

const list1 = [
  {
    firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby',
  },
  {
    firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript',
  },
  {
    firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C',
  },
  {
    firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript',
  },
];
