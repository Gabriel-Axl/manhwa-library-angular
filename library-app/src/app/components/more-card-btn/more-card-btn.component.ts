import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-more-card-btn',
  templateUrl: './more-card-btn.component.html',
  styleUrls: ['./more-card-btn.component.css']
})
export class MoreCardBtnComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
