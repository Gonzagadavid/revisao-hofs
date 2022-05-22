// function countDevelopers(list) {
//   const cb = (dev) => dev.continent === 'Europe' && dev.language === 'JavaScript'
//   const filtered = list.filter(cb)
//   return filtered.length
// }

const countDevelopers = (list) => list.filter((dev) => dev.continent === 'Europe' && dev.language === 'JavaScript').length;
