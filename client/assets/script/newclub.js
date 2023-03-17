import { ClubService } from "./club.service.js";
import { Club } from "./club.class.js";

let btnNew = document.querySelector('#newclub');
let Cs = new ClubService();

btnNew.addEventListener('click', () => {
  let name = document.querySelector('#name');
  let code = document.querySelector('#code');
  let country = document.querySelector('#country');

  let newClub = new Club('', name.value, code.value, country.value);
  
  let promise = Cs.add(newClub);
  promise.then(() => {
    name.value = '';
    code.value = '';
    country.value = '';
  });
});