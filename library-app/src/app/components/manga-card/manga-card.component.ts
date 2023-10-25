import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CardApiService } from 'src/app/service/card-api.service';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.css']
})

export class MangaCardComponent implements OnInit {
  load: boolean = true;
  @Input() id:string = ""
  faTrash = faTrash;
  @Input() titulo: string = "Solo leveling";
  @Input() cardImg: string = "";
  @Input() numCap: number = 0;
  @Input() capDate: string  | null = "10/10/2002";

  constructor(
    private mangaService: CardApiService,
    private fireStorage:AngularFireStorage,) { }

  ngOnInit(): void {
  }

 deleteManga(event: Event){
    event.stopPropagation()
    this.loading();
    this.mangaService.deleteMangaById(this.id).subscribe(
      async () => {
        console.log("manga deletado com sucesso")
        await this.deleteFile(this.cardImg)
        window.location.reload();
      },
      error => {
        console.error('Erro ao deletar o manga', error);
      }
    );
  }

  async deleteFile(url: string) {
    // Obtendo a referência do arquivo a partir da URL
    const storageRef = this.fireStorage.storage.refFromURL(url);
  
    try {
      // Tentando excluir o arquivo
      await storageRef.delete();
      console.log('Arquivo excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir o arquivo:', error);
    }
  }
  loading(){
    this.load = !this.load
  }
}
