// Vivenda -> clase padre
// Residencia
// Apartamento (esta en un edificio)

// Generalizacion
class Vivienda {
  // forma corta

  // constructores
  constructor(
    private _numeroPostal: string,
    private _barrio: string,
    private _metrosCuadradosConstruidos: number,
    private _latitud?: string,
    private _longitud?: string
  ) {}

  // set & get
  set numeroPostal(value: string) {
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
  constructor(
    numeroPostal: string,
    barrio: string,
    metrosCuadradosConstruidos: number,
    private _color: string,
    latitud?: string,
    longitud?: string
  ) {
    super(numeroPostal, barrio, metrosCuadradosConstruidos, latitud, longitud);
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
