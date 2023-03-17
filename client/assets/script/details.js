import { FilmService } from './film.service.js';
import { Film } from './film.class.js';

let titre = document.querySelector('#titre');
let genre = document.querySelector('#genre');
let pays = document.querySelector('#pays');
let date = document.querySelector('#date');
let resume = document.querySelector('#resume');
let title = document.querySelector('#title');

let myId = window.location.hash.substring(1);

let F = new FilmService();
let myFilm = F.get(myId);
myFilm.then((elt) => {
  title.innerText =elt.nom;
  titre.value = elt.nom;
  genre.value = elt.genre;
  pays.value = elt.pays;
  date.value = elt.date;
  resume.value = elt.synopsis;
  /* ------------------------------------------ */
  // le film doit être chargé pour que je le modifie !
  let modif = document.querySelector('#modif');
  modif.addEventListener('click', () => {
    let tmp = new Film(elt._id, titre.value, genre.value, pays.value, date.value, resume.value);
    F.modif(tmp);
  });
});

