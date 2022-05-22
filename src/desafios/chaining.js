const list1 = [
  {
    firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript',
  },
  {
    firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C',
  },
  {
    firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby',
  },
  {
    firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby',
  },
  {
    firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP',
  },
];

// {fullname, age}

// const filtered = list1.filter((dev) => dev.language === 'Ruby');
// const result = filtered.map((dev) => ({ fullname: `${dev.firstName} ${dev.lastName}`, age: dev.age }));

const result = list1
  .filter((dev) => dev.language === 'Ruby')
  .map((dev) => ({ fullname: `${dev.firstName} ${dev.lastName}`, age: dev.age }));

console.log(result);
