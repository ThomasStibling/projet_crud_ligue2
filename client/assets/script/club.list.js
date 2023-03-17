import { ClubService } from './club.service.js';

let tbody = document.querySelector('#listClub');
const ClubS = new ClubService();
ClubS.getAll(tbody);