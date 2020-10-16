// +------------------------------------+
// | Variable | scope | mutable | hoisting |
// -------------------------------------
// | var    |  function | true  | undefined |
// ---------------------------------------------
// | let    |  block   | true    | Reference acceso|
//----------------------------------------------
// | const  |  block   | false  | Reference acceso |

// varible global
var soyUnVar = "Hola soy un var";
let soyUnLet = "Soy un let";

function init() {
  console.log(soyUnLet);
  // variable local
  let soyUnLet = 450;
  // var soyUnVar = 500;
  // console.log(soyUnLet);
}

init();
