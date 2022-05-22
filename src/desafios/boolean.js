/*
Desenvolva a checkField que recebe o dados de uma pessoa e verifica de está prenchido
caso esteja preenchido retorne true, se não false
*/
export function checkField(fieldValue) {
  return !!fieldValue;
}

/*
Desenvolva a função checkThing que recebe dois valores numericos como parametro,
o value e payment e retorna true caso tenha troco e false caso não
*/

export function checkThing(value, payment) {
  return !!(payment - value);
}
