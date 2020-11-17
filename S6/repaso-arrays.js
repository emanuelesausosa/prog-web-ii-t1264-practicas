// ejercicio
// de series
// ej. [2,4,6,8,10, 12, 14] -> numeros pares
// ej. [1,3,5,7,9,11,13,] -> impares

// ej. [2,4,12,48]  -- [3,6,18,72]
/*
Mire esta serie: 2, 4, 12, 48,… la semilla de esta serie fue la número 2.

Mira esta serie: 3, 6, 18, 72, ... la semilla de esta serie fue la número 3.

Cree una función que reciba dos números enteros: x e y. La función debe devolver el elemento y de la serie generada por x.

Por ejemplo, si la serie recibe x = 3, y = 4, 
debería devolver 72, porque 72 es el cuarto elemento de la serie generada cuando x = 3.
* /


// x = 2, y = 4
// x = 3, y = 15
// x = 5, y 3

2 * 1 = 2
2 * [i = 2] = 4
4 * [i = 3] = 12
12 * [i = 4] = 48
48 * [i = 5] = 240
*/

// retorn numero
function serie(x, y) {
  for (let i = 1; i <= y; i++) {
    x *= i;
  }
  return x;
}

// x = 2, y = 4
console.log(serie(2, 4)); // 48

// x = 3, y = 4
console.log(serie(3, 4)); // 72

// x = 2, y = 5
console.log(serie(2, 5)); // 240
