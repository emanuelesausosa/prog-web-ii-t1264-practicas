"use strict";
// enum -> enumerado
// any
// (1) lenguaje  (built in) --- (2) definidos por usuario
// clases -> Vehiculo
var Colores;
(function (Colores) {
    Colores["ROJO"] = "#FF0000";
    Colores["AZUL"] = "#0000FF";
    Colores["VERDE"] = "#008F39";
    Colores["AMARILLO"] = "#FFFF00";
})(Colores || (Colores = {}));
;
let mensaje = (color) => {
    switch (color) {
        case Colores.AMARILLO:
            console.log("El color es ", color);
            break;
        case Colores.AZUL:
            console.log("El color es ", color);
            break;
        case Colores.VERDE:
            console.log("El color es ", color);
            break;
        case Colores.ROJO:
            console.log("El color es ", color);
            break;
        default:
            console.log("No hay color");
            break;
    }
};
mensaje(Colores.ROJO);
// ejercicio -> pitagoras
// POO
// Clases
// -> constructores
// -> accessors
// sobrecarga
// private / public
// Herencia
// Interfaces & abstract clases (contratos)
