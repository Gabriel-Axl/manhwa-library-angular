import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.css']
})
export class MangaCardComponent implements OnInit {
  private id:string | null = "0"
  @Input() titulo: String = "Solo leveling";
  @Input() cardImg: String | null = "";
  @Input() numCap: Number = 0;
  @Input() capDate: String  | null = "10/10/2002";
  @Input() categoria: String[] = ['ação'];
  constructor() { }

  ngOnInit(): void {
  }

}
