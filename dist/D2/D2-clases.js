"use strict";
// Clase
var Colores;
(function (Colores) {
    Colores["ROJO2"] = "#FF0000";
    Colores["AZUL2"] = "#0000FF";
    Colores["VERDE2"] = "#008F39";
    Colores["AMARILLO2"] = "#FFFF00";
})(Colores || (Colores = {}));
;
class Vehiculo {
    // inicializar un objeto
    // instancia un objeto
    constructor(marca, motor, color) {
        this.marca = marca;
        this.motor = motor;
        this.color = color;
    }
}
// formas de instanciar un objeto
var vehiculo = new Vehiculo("BMW", 3.5, Colores.AZUL2);
vehiculo.marca = "Toyota";
console.log(JSON.stringify(vehiculo));
// var vehiculo2 = new Vehiculo("BMW", 3.5, Colores.AZUL2);
// 2da forma
class Vehiculo2 {
    // inicializar un objeto
    // instancia un objeto
    constructor(marca, motor, color) {
        this.marca = marca;
        this.motor = motor;
        this.color = color;
    }
}
var vehiculo2 = new Vehiculo2("Bently", 3.5, Colores.AZUL2);
console.log(vehiculo2);
class Vehiculo3 {
    // inicializar un objeto
    // instancia un objeto
    constructor(_marca, motor, color) {
        this._marca = _marca;
        this.motor = motor;
        this.color = color;
    }
    // accesores
    // set & get
    set marca(value) {
        // validacion
        this._marca = value;
    }
    get marca() { return this._marca; }
}
var vehiculo3 = new Vehiculo3("Bently", 3.5, Colores.AZUL2);
vehiculo3.marca = "Suzuki";
console.log(vehiculo3);
console.log(vehiculo3.marca);
