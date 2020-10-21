// carateristicas
// - dato primitivo, -> arreglo de chars
// - char ? -> character
//  ['a', 'b', 'c']
// metodos
// 14 ->  25444774747
// 'c'
//  [1,5,5,5,4,4,]
//

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
    console.log(soyUnString[i]);
}

// for of
for (let i of soyUnString) {
  console.log(i);
}

// while

