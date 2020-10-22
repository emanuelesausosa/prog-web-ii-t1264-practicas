// variables
// tema de variables
let estaEsUnaVariableLet = "";
var estaEsUnaVariableVar = "";
const estaEsUnaVariableConst = "";

// +------------------------------------+
// | Variable | scope | mutable | hoisting |
// -------------------------------------
// | var    |  function | true  | undefined |
// ---------------------------------------------
// | let    |  block   | true    | Reference error |
//----------------------------------------------
// | const  |  block   | false  | Reference error |

function holaMundo(nombre) {
  var saludo = "Hola " + nombre;
  let adios = "adios";
  console.log(saludo);
}

//console.log(adios);

holaMundo("Melvin");

// importar funciones
const {
  myFuncion,
  myFunction2,
  myFunctionFlecha,
} = require("./module-example");

console.log(myFuncion());
console.log(myFunction2("Luis"));
console.log(myFunctionFlecha());
