import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MangaDTO } from '../components/models/mangaDTO';
import { page } from '../components/models/page';
import { mangaModel } from '../components/models/mangaModel';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {
  
  private apiUrl = 'http://localhost:8080/manga';

  constructor(private http: HttpClient) { }

  saveMangaImage(file: File, Id: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.apiUrl+"/image/"+Id}`, formData);
  }

  saveMangaInfo(mangaDTO: MangaDTO){
    return this.http.post(`${this.apiUrl+"/info"}`, mangaDTO)
  }

  getAllManga(pageable: any): Observable<page<mangaModel>> {
    return this.http.get<page<mangaModel>>(`${this.apiUrl}`, { params: pageable });
  }

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
      },
      {
        id:4,
        titulo: 'O cara que usa gelo gelado',
        cardImg: 'https://cdn.goatscans.com/wp-content/uploads/2022/09/ReturnOfTheFrozenPlayerNovelCapa-copiar-1-scaled-e1665796834834.jpg',
        numCap: 213,
        capDate: '10/10/2000'
      },
      {
        id:3,
        titulo: 'O cara que usa gelo gelado',
        cardImg: 'https://cdn.goatscans.com/wp-content/uploads/2022/09/ReturnOfTheFrozenPlayerNovelCapa-copiar-1-scaled-e1665796834834.jpg',
        numCap: 213,
        capDate: '10/10/2000'
      },
      {
        id:3,
        titulo: 'O cara que usa gelo gelado',
        cardImg: 'https://cdn.goatscans.com/wp-content/uploads/2022/09/ReturnOfTheFrozenPlayerNovelCapa-copiar-1-scaled-e1665796834834.jpg',
        numCap: 213,
        capDate: '10/10/2000'
      },
      {
        id:3,
        titulo: 'O cara que usa gelo gelado',
        cardImg: 'https://cdn.goatscans.com/wp-content/uploads/2022/09/ReturnOfTheFrozenPlayerNovelCapa-copiar-1-scaled-e1665796834834.jpg',
        numCap: 213,
        capDate: '10/10/2000'
      },
      {
        id:3,
        titulo: 'O cara que usa gelo gelado',
        cardImg: 'https://cdn.goatscans.com/wp-content/uploads/2022/09/ReturnOfTheFrozenPlayerNovelCapa-copiar-1-scaled-e1665796834834.jpg',
        numCap: 213,
        capDate: '10/10/2000'
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
