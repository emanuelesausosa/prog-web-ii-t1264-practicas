"use strict";
// Vivenda -> clase padre
// Residencia
// Apartamento (esta en un edificio)
// Generalizacion
class Vivienda {
    // forma corta
    // constructores
    constructor(_numeroPostal, _barrio, _metrosCuadradosConstruidos, _latitud, _longitud) {
        this._numeroPostal = _numeroPostal;
        this._barrio = _barrio;
        this._metrosCuadradosConstruidos = _metrosCuadradosConstruidos;
        this._latitud = _latitud;
        this._longitud = _longitud;
    }
    // set & get
    set numeroPostal(value) {
        // puedo hacer validaciones,
        // recoger correlativo
        //
        this._numeroPostal = value;
    }
    get numeroPostal() {
        return this._numeroPostal;
    }
}
let vivienda = new Vivienda("", "", 0);
// general
// numneroPostal
// m2
// ubicacion
// lat
// long
// Especialización
class Residencia extends Vivienda {
    // color
    constructor(numeroPostal, barrio, metrosCuadradosConstruidos, _color, latitud, longitud) {
        super(numeroPostal, barrio, metrosCuadradosConstruidos, latitud, longitud);
        this._color = _color;
    }
}
// clase aparamento
//
// numeroPiso
/*
class Apartamento extends Vivienda {
  numeroPiso: number;
}
*/
