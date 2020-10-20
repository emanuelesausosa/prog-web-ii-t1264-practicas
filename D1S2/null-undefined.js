// caracteristicas
// null -> [carece de valor, false (falsy) ]
// undefined -> [carece de valor, false ]
// diferencias -> null es un valor esperado (predecible)
// undefined es un valor no esperado

var variable1 = null;
var variable2;

if (null) {
}

if (undefined) {
  //
}

console.log(Boolean(variable2));

if (null == undefined) {
  console.log("Hola mundo");
}

if (null === undefined) {
  console.log("Hola mundo");
}
