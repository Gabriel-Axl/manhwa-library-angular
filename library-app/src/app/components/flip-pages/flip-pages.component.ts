import { Component, OnInit, Input } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { CardApiService } from 'src/app/service/card-api.service';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-flip-pages',
  templateUrl: './flip-pages.component.html',
  styleUrls: ['./flip-pages.component.css']
})
export class FlipPagesComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  totalPages!:number;
  pagesCount!: number[];
  selectedPage: number = 0; 
  @Input() countPages:number = 0;


  
  constructor(
    private mangaService: CardApiService,
    private homecomponent: HomeComponent
  ) { }

 
  ngOnInit(): void {
    this.mangaService.getNumberPages().subscribe(async (response: any) => {
      this.totalPages = response;
      this.pagesCount = Array(this.totalPages).fill(0).map((x, i) => i + 1)
    })
  }

  handleButtonClick(event: MouseEvent, page: number){
    event.preventDefault();
    if(page >= 0 && page < this.totalPages){
      this.selectedPage = page
      this.homecomponent.getMangas(page)
    }
  }

}
