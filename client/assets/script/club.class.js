export class Club {
  _id;
  name;
  code;
  country;

  constructor(id, name, code, country) {
    this._id = id;
    this.name = name;
    this.code = code;
    this.country = country;
  }

  get _id() {
    return this.__id;
  }

  set _id(tmp) {
    this.__id = tmp;
  }
  
  get name() {
    return this._nom;
  }

  set name(tmp) {
    this._nom = tmp;
  }

  get code() {
    return this._genre;
  }

  set code(tmp) {
    this._genre = tmp;
  }

  get country() {
    return this._pays;
  }

  set country(tmp) {
    this._pays = tmp;
  }

}