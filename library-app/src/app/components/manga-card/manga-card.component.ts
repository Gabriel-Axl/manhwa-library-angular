import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.css']
})
export class MangaCardComponent implements OnInit {
  private id:string | null = "0"
  @Input() titulo: String = "Solo leveling";
  @Input() cardImg: String = "https://cdn.goatscans.com/wp-content/uploads/2022/10/Nano-Machine-e1666733669563-175x238.png";
  @Input() numCap: Number = 0;
  @Input() capDate: String = "10/10/2002";
  @Input() categoria: String[] = ['ação'];
  constructor() { }

  ngOnInit(): void {
  }

}
