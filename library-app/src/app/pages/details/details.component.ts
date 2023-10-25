import { Component, OnInit } from '@angular/core';
import { mangaModel } from 'src/app/components/models/mangaModel';
import { CardApiService } from 'src/app/service/card-api.service';
import { ActivatedRoute } from '@angular/router';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  title:string | null = "";
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  manga: mangaModel = {
    capDate: "",
    id: "",
    imagem: "",
    urlImg: "",
    numCap: 0,
    title: "",
    description: ""
  }

  constructor(
    private apiService: CardApiService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        this.title = value.get('titulo')
      }
    )

    this.apiService.getByTitle(this.title).subscribe(
      (response) => {
        this.manga = response as mangaModel;
      }
    )
  }


  more(){
    this.manga.numCap += 1;
    this.onEditManga()
  }
  less(){
    this.manga.numCap -= 1;
    this.onEditManga()
  }

  async onEditManga() {
    this.apiService.editManga(this.manga.id, this.manga).subscribe(
      (response) => {
      }
    )
  }
}
