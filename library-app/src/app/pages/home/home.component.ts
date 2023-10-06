import { Component, OnInit } from '@angular/core';
import { CardApiService } from '../../service/card-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dados: any[] = [];
  data: any[] = [];
  constructor(private apiService: CardApiService) { }

  ngOnInit(): void {
    this.data = this.apiService.getDados()
    this.dados = this.data.slice(0, 9);
  }

}
