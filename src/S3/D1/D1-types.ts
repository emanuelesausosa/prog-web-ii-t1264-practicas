// tipos de datos
//              any -> dinamico,
// |                                |
// definidos por el lenguaje  ---  Defeinidos por el usuario (dev)
// [string, number, boolean, [], void,]      [Array, Clases, interfaces, types, enum]

var soyUnAny: any = [];
var soyUnAny2: any = "";
var soyUnAny3: any;

// definidos por el lenguaje
// string
var soyString: string = "Hola";

// number
var soyNumber: number = 66;

// boolean
var soyBoolean: boolean = true;

// arreglo tipado
var soyArrayNumbers: number[] = [1, 1, 4, 4, 7];

// void -> no retorna valor
// funcion
function saludoFnc(nombre: string): void {
  console.log("Hola ", saludo);
}

// definidos por el usuario
class VehiculoA {
  marca: string;
  motor: number;

  constructor(marca: string, motor: number) {
    this.marca = marca;
    this.motor = motor;
  }
}

const carrito: VehiculoA = new VehiculoA("Toyota", 2.0);

interface DatosPersonales {
  nombre: string;
  fechaNacimiento: string;
}

const datosPersonales: DatosPersonales = {
  nombre: "Emanuel",
  fechaNacimiento: Date.now().toString(),
};
