// Clase

enum Colores {
    ROJO2 = '#FF0000',
    AZUL2 = '#0000FF',
    VERDE2 = '#008F39',
    AMARILLO2 = '#FFFF00'
};

class Vehiculo {
    // propiedades
    marca: string;
    motor: number;
    color: Colores

    // inicializar un objeto
    // instancia un objeto
    constructor(marca: string, motor: number, color: Colores) {
        this.marca = marca;
        this.motor = motor;
        this.color = color;
    }
}

// formas de instanciar un objeto
var vehiculo: Vehiculo = new Vehiculo("BMW", 3.5, Colores.AZUL2);
vehiculo.marca = "Toyota"
console.log(JSON.stringify(vehiculo));
// var vehiculo2 = new Vehiculo("BMW", 3.5, Colores.AZUL2);

// 2da forma
class Vehiculo2 {   

    // inicializar un objeto
    // instancia un objeto
    constructor(private marca: string, private motor: number, private color: Colores) {        
    }
}

var vehiculo2 = new Vehiculo2("Bently", 3.5, Colores.AZUL2);
console.log(vehiculo2);

class Vehiculo3 {   

    // inicializar un objeto
    // instancia un objeto
    constructor(private _marca: string, private motor: number, private color: Colores) {
    }

    // accesores
    // set & get
    set marca(value: string) {
        // validacion
        this._marca = value;
    }
    
    get marca() { return this._marca; }
}

var vehiculo3:Vehiculo3 = new Vehiculo3("Bently", 3.5, Colores.AZUL2);
vehiculo3.marca = "Suzuki";
console.log(vehiculo3);
console.log(vehiculo3.marca);


