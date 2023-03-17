import { ClubService } from './club.service.js';
import { Club } from './club.class.js';

let name = document.querySelector('#name');
let code = document.querySelector('#code');
let country = document.querySelector('#country');

let myId = window.location.hash.substring(1);

let Cs = new ClubService();
let cl = Cs.get(myId);
cl.then((elt) => {
  name.innerText =elt.name;
  name.value = elt.name;
  code.value = elt.code;
  country.value = elt.country;

  let modif = document.querySelector('#modif');
  modif.addEventListener('click', () => {
    let tmp = new Club(elt._id, name.value, code.value, country.value);
    Cs.modif(tmp);
  });
});

