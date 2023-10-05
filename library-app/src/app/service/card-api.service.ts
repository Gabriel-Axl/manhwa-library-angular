import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {
  getDados() {
    return [
      {
        id: 0,
        titulo: 'Carinha que usa nanorobo',
        cardImg: 'https://cdn.goatscans.com/wp-content/uploads/2022/10/Nano-Machine-e1666733669563-175x238.png',
        numCap: 173,
        capDate: '27/10/2023'
      },
      {
        id: 1,
        titulo: 'Smurfer do irmão',
        cardImg: 'https://cdn.goatscans.com/wp-content/uploads/2022/05/Second-Life-Ranker-Novel-125x180.jpg',
        numCap: 380,
        capDate: '27/10/2023'
      },
      {
        id: 2,
        titulo: 'o mano fodão que tem um clã de merda',
        cardImg:'https://static3.mangalivre.net/capas/g5-K_in_YaoOhnbLCtT4sg/9179/external_cover.jpg',
        numCap: 445,
        capDate: '04/10/2023'
      },
      {
        id:3,
        titulo: 'O cara que usa gelo gelado',
        cardImg: 'https://cdn.goatscans.com/wp-content/uploads/2022/09/ReturnOfTheFrozenPlayerNovelCapa-copiar-1-scaled-e1665796834834.jpg',
        numCap: 213,
        capDate: '10/10/2000'
      }
    ];
  }
}
