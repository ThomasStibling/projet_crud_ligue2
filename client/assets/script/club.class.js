export class Club {
  _id;
  _name;
  _code;
  _country;
  _logo;

  constructor(id, name, code, country,logo) {
    this._id = id;
    this._name = name;
    this._code = code;
    this._country = country;
    this._logo = logo;
  }

  get _id() {
    return this.__id;
  }

  set _id(tmp) {
    this.__id = tmp;
  }
  
  get name() {
    return this._name;
  }

  set name(tmp) {
    this._name = tmp;
  }

  get code() {
    return this._code;
  }

  set code(tmp) {
    this._code = tmp;
  }

  get country() {
    return this._country;
  }

  set country(tmp) {
    this._country = tmp;
  }

  get logo() {
    return this._logo;
  }

  set logo(tmp) {
    this._logo = tmp;
  }
}