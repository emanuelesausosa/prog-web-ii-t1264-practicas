"use strict";
class Animal {
    constructor(especie) {
        this.especie = especie;
    }
    sonido() {
        console.log("Ruge");
    }
}
class Leon extends Animal {
}
let animalito = new Leon("Felino");
animalito.sonido();
// console.log(animalito);
// Motor
// -> encender
// CombustionInterna 
// cilindros
// combustible
// Electrico
// Amperaje
//
