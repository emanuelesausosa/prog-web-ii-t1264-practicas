"use strict";
class Persona {
    constructor(_firstName, _lastName, _lastUpdate) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._lastUpdate = _lastUpdate;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastUpdate(value) {
        this._lastUpdate = value;
    }
    get lastUpdate() {
        return this._lastUpdate;
    }
}
let persona = new Persona("", "", new Date());
class Staff extends Persona {
    constructor(firstName, lastName, lastUpdate, addres) {
        super(firstName, lastName, lastUpdate);
        this.addres = addres;
    }
}
