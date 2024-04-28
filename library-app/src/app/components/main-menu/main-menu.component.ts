import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  faSearch = faSearch;
  faList = faList;
  faClock = faClock;
  
  inputValue: string = '';
  inputView: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  changeInput(){
    if(this.inputView == true){
      this.submitSearch()
    }else{
      this.inputView = !this.inputView;
    }
    
  }
  submitSearch(){
    if(this.inputValue!=''){
      this.inputValue = '';
    }
    this.inputView = !this.inputView;
      
  }
}
