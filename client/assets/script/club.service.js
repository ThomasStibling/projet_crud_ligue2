import { Club } from "./club.class.js";

export class ClubService {
  constructor() {

  }

  getAll(target) {
    let myHeaders = new Headers();
    let url = '/club';
    let options = {
      method: 'GET',
      headers: myHeaders
    };
    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        response.forEach(elt => {
          let clubName = document.createElement('tr');
          let clubCode = document.createElement('td');
          clubCode.innerText = elt.name;
          let clubModif = document.createElement('td');
          let myIcone = document.createElement('i');
          myIcone.classList.add('fas','fa-light', 'fa-circle-info');
          let clubDetails = document.createElement('a');
          clubDetails.setAttribute('href', './pages/details.html#' + elt.id);
          clubDetails.appendChild(myIcone);
          clubModif.appendChild(clubDetails);
          clubModif.style.textAlign = 'center';
          let clubDelete = document.createElement('td');
          let btnDelete = document.createElement('button');
          let myIcone2 = document.createElement('i');
          myIcone2.classList.add('fas', 'fa-light', 'fa-trash')
          btnDelete.classList.add('btn', 'btn-outline-danger');
          clubDelete.style.textAlign = 'center';
          clubDelete.appendChild(btnDelete);
          btnDelete.appendChild(myIcone2);
          btnDelete.addEventListener('click', () => {
            this.remove(elt.id);
          });

          target.appendChild(clubName);
          clubName.appendChild(clubCode);
          clubName.appendChild(clubModif);
          clubName.appendChild(clubDelete);
        });
        return response;
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
    }

    get(id) {
     let myHeaders = new Headers();
     let url = '/club/' + id;
     let options = {
       method: 'GET',
       headers: myHeaders
      };
      
      return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((resource) => {
        let tmp = new Club(resource.id, resource.name, resource.code, resource.country, resource.logo);
        return tmp;
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }



  modif(club) {
    let url = '/club/' + club._id;
    let options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(club)
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('reussi')
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }




    remove(id) {
    let url = '/club/' + id;
    let myHeaders = new Headers();
    let options = {
      method : 'DELETE', 
      headers: myHeaders
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('Réussi');
          console.log(id);
          location.reload();
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }
}