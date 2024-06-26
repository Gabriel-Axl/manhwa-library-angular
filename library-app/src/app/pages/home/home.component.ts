import { Component, OnInit, Output } from '@angular/core';
import { CardApiService } from '../../service/card-api.service';
import { mangaModel } from 'src/app/components/models/mangaModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dados: mangaModel[] = [];
  pageable = {
    page: '0',   
    size: '9',  
    sort: 'title',  
    direction: 'ASC'  
  };

  constructor(private apiService: CardApiService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getMangas(0);
  }

  @Output() getMangas(page: number){
    this.pageable.page = page.toString();
    this.apiService.getAllManga(this.pageable).subscribe(
      data => {
        this.dados = data.content.map(manga => {
          manga.capDate = this.datePipe.transform(manga.capDate, 'dd/MM/yyyy');
          return manga;
        });
      },
      error => {
        console.error('Erro ao obter os dados', error);
      }
    );
  }
  
}
