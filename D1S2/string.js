// carateristicas
// - dato primitivo, -> arreglo de chars
// - char ? -> character
//  ['a', 'b', 'c']
// metodos
// 14 ->  25444774747
// 'c'
//  [1,5,5,5,4,4,]
//

const _ = require("lodash");

let soyUnString = "Hola mundo";
let soyUnNumero = 4;
// for in (1)
for (let i = 0; i < soyUnString.length; i++) {
  // console.log(soyUnString[i]);
}

// for in (2)
for (let i in soyUnString) {
  // console.log(soyUnString[i]);
}
// for each

[1, 1, 1, 11, 1].forEach((i) => {
  console.log(i);
});

Array.of(soyUnString).forEach((char) => {
  // console.log(char);
});

// for in
for (let i in soyUnString) {
  // console.log(soyUnString[i]);
}

// for of
for (let i of soyUnString) {
  // console.log(i);
}

// while
let index = 0;
while (index < soyUnString.length) {
  console.log(soyUnString[index]);
  index++;
}

// console.log(_.concat([1], 2, 3, [3]));

// funciones con strings
// split
const fecha = "25/02/2016";
const arrayFecha = fecha.split("/");
console.log(arrayFecha);

const regexPattern = /[0-9]+|\+|-|\*|/gm;
const suma = "52+52-65*41";
// const numerosASumar = suma.split(regexPattern);
const numerosASumar = suma.match(regexPattern);
console.log("numeros a sumar", numerosASumar);
// regex  -> Regular Expression

const listaDeCorreos = "abc@mm.com, abc@mm.com,abc@mm.com,abc@mm.com";
const correos = listaDeCorreos.split(",");
console.log(correos);

// includes
const oracion = "Padre nuestro que estas en los cielos, que";
const include = oracion.includes("a"); // return boolenan true | false
console.log(include);
// match
const match = oracion.match("que"); // return an array
console.log(match);

// substring -> extraer caracteres (index inicial, index final)
const foundSubString = oracion.substring(5, 10);
console.log(foundSubString);

// substr -> extraer caracteres (index inicial, numero de caracters hacia delante)
const foundSubStr = oracion.substr(5, 10);
console.log(foundSubStr);
// toLowerCase
console.log(oracion.toLocaleLowerCase());

// toUpperCase
console.log(oracion.toUpperCase());

oracion.replace(""); // (new word, old word)

// ejercicio
// poner mayuscula solo la primera letra de cada palabra
// 
