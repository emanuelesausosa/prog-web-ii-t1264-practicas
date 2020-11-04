class Persona {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _lastUpdate: Date
  ) {}

  set firstName(value: string) {
    this._firstName = value;
  }
  get firstName() {
    return this._firstName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
  get lastName() {
    return this._lastName;
  }

  set lastUpdate(value: Date) {
    this._lastUpdate = value;
  }
  get lastUpdate() {
    return this._lastUpdate;
  }
}

let persona = new Persona("", "", new Date());

class Staff extends Persona {
  constructor(
    firstName: string,
    lastName: string,
    lastUpdate: Date,
    private addres: number
  ) {
    super(firstName, lastName, lastUpdate);
  }
}
