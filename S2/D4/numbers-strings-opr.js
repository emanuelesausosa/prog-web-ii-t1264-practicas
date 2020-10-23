// operacion -> Number.parseInt(string)
// Number.isNaN(value)
// if(typeof value === 'number')

const miNumero = Number.parseInt("*");
// que es NaN? -> Not a Number, (null, undefined) -> false
if (Number.isNaN(miNumero)) {
  console.log("No intenter engañarme", miNumero);
} else {
  console.log(miNumero);
}

if (!miNumero) {
  console.log("No intenter engañarme", miNumero);
}

// typeof es una palabra reservada, es expresion evaluadora
if (typeof miNumero !== "number") {
  //typeof
  console.log("No intenter engañarme", miNumero);
} else {
  console.log(miNumero);
}
