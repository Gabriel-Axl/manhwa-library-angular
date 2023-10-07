import { Component, OnInit } from '@angular/core';
import { CardApiService } from '../../service/card-api.service';
import { MangaDTO } from 'src/app/components/models/mangaDTO';
import {AngularFireStorage} from '@angular/fire/compat/storage'
import { Router } from '@angular/router';


@Component({
  selector: 'app-manga-form',
  templateUrl: './manga-form.component.html',
  styleUrls: ['./manga-form.component.css']
})

export class MangaFormComponent implements OnInit {
  
  mangaDTO: MangaDTO = {
    title:"",
    numCap: null,
    urlImg: ""
  }
   
  selectedFile!: File;

  constructor(
    private mangaService: CardApiService, 
    private fireStorage:AngularFireStorage,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onSaveManga() {
    if (this.selectedFile) {
      await this.saveFile();
    }

    if (this.mangaDTO.urlImg != "") {
      this.mangaService.saveMangaInfo(this.mangaDTO).subscribe(
        (response: any) => {
          this.router.navigate(['/']);
        },
        error => {
          console.error('Erro ao salvar o manga', error);
        }
      );
    }else[
    
    ]
  }

  async saveFile(){
    const path = `mangaImg/${this.mangaDTO.title + this.selectedFile}`
    const uploadTask = await this.fireStorage.upload(path, this.selectedFile)
    const url = await uploadTask.ref.getDownloadURL()
    console.log(url)  
    this.mangaDTO.urlImg = url;

  }


  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files) {
      this.selectedFile = inputElement.files[0];

    }
  }

}
