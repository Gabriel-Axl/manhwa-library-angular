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

  getByTitle(title: string | null){
    return this.http.get(`${this.apiUrl+"/detail/"+title }`);
  }

  deleteMangaById(Id: string){
    return this.http.delete(`${this.apiUrl}/${Id}`)
  }

  editManga(Id: string, mangaModel: mangaModel){
    return this.http.put(`${this.apiUrl}/${Id}`, mangaModel)
  }

}
