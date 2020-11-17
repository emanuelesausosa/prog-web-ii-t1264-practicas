/*
Mira esta serie: 2, 5, 10, 17, 26, ...
Cree una función que reciba un número entero (x) y 
devuelva el elemento x de la serie. 
Por ejemplo: si la función recibe x = 3, debería devolver: 10.
*/

// dado x = 1341
// que valor deberia de devolver
/* i = 1, [i * i] + 1 = 2
i = 2, [i * i] + 1 = 5
i = 3, [i * i] + 1 = 10
= 17
= 26
*/

function serie2(x) {
  let result = 0;
  for (let i = 1; i <= x; i++) {
    result = i * i + 1;
  }
  return result;
}

console.log(serie2(2)); // 5
console.log(serie2(3)); // 10
console.log(serie2(4)); // 17
console.log(serie2(1341)); // 1798282
