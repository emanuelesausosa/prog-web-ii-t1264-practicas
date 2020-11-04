// polimorfimso
// -> algo que puede tomar muchas formas

// abstract class
abstract class MobilePhone {
  // Analogos - keyboard 1995
  // GSM  -  chip, keyboard, > 99
  // Xphone  - chip, camara, touch, > 2005
  // smart phone -- chip camara, touch, GPS > 2010

  private brand: string;
  private model: string;

  calculadora(): void {
    // hhhh
  }
  abstract encender(): void;
}

interface InstalarChip {
  chip: any;
}

interface Camara {
  camara: any;
  takePhoto(): void;
}

interface GPS {
  miUltimaUbicacionGurdada: any;
  obtenerUbicacion(): void;
}

class AnalogPhone extends MobilePhone {
  encender(): void {
    // pasos
  }
}

class GsmPhone extends MobilePhone implements InstalarChip {
  chip: any;
  encender(): void {
    // cargar drivers gsm
    // cargar sistma java
  }
}

class Xphone extends MobilePhone implements InstalarChip, Camara {
  camara: any;
  takePhoto(): void {
    throw new Error("Method not implemented.");
  }
  chip: any;
  encender(): void {
    // cargar drivers gsm
    // cargar sistma java
    // ...
  }
}

class SmartPhone extends MobilePhone implements InstalarChip, Camara, GPS {
  miUltimaUbicacionGurdada: any;
  obtenerUbicacion(): void {
    // encender GPS
    // contectarse satelite
    // ...
    // guardar ubicacion en variable miUltimaUbicacionGurdada
  }
  camara: any;
  takePhoto(): void {
    throw new Error("Method not implemented.");
  }
  chip: any;
  encender(): void {
    // cargar drivers
    // cargar android
    // buscar se;al
    // buscar conexion a internet
  }
}

// interface
