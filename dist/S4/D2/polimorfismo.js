"use strict";
// polimorfimso
// -> algo que puede tomar muchas formas
// abstract class
class MobilePhone {
    calculadora() {
        // hhhh
    }
}
class AnalogPhone extends MobilePhone {
    encender() {
        // pasos
    }
}
class GsmPhone extends MobilePhone {
    encender() {
        // cargar drivers gsm
        // cargar sistma java
    }
}
class Xphone extends MobilePhone {
    takePhoto() {
        throw new Error("Method not implemented.");
    }
    encender() {
        // cargar drivers gsm
        // cargar sistma java
        // ...
    }
}
class SmartPhone extends MobilePhone {
    obtenerUbicacion() {
        // encender GPS
        // contectarse satelite
        // ...
        // guardar ubicacion en variable miUltimaUbicacionGurdada
    }
    takePhoto() {
        throw new Error("Method not implemented.");
    }
    encender() {
        // cargar drivers
        // cargar android
        // buscar se;al
        // buscar conexion a internet
    }
}
// interface
