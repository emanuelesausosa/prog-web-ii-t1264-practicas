"use strict";
// tipos de datos
//              any -> dinamico,
// |                                |
// definidos por el lenguaje  ---  Defeinidos por el usuario (dev)
// [string, number, boolean, [], void,]      [Array, Clases, interfaces, types, enum]
var soyUnAny = [];
var soyUnAny2 = "";
var soyUnAny3;
// definidos por el lenguaje
// string
var soyString = "Hola";
// number
var soyNumber = 66;
// boolean
var soyBoolean = true;
// arreglo tipado
var soyArrayNumbers = [1, 1, 4, 4, 7];
// void -> no retorna valor
// funcion
function saludoFnc(nombre) {
    console.log("Hola ", saludo);
}
// definidos por el usuario
class VehiculoA {
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor;
    }
}
const carrito = new VehiculoA("Toyota", 2.0);
const datosPersonales = {
    nombre: "Emanuel",
    fechaNacimiento: Date.now().toString(),
};
