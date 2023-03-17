export class Club {
  _id;
  name;
  code;
  country;
  logo;

  constructor(id, name, code, country,logo) {
    this._id = id;
    this.name = name;
    this.code = code;
    this.country = country;
    this.logo = logo;
  }

  get _id() {
    return this.__id;
  }

  set _id(tmp) {
    this.__id = tmp;
  }
  
  get name() {
    return this.name;
  }

  set name(tmp) {
    this.name = tmp;
  }

  get code() {
    return this.code;
  }

  set code(tmp) {
    this.code = tmp;
  }

  get country() {
    return this.country;
  }

  set country(tmp) {
    this.country = tmp;
  }

  get logo() {
    return this.logo;
  }

  set logo(tmp) {
    this.logo = tmp;
  }
}