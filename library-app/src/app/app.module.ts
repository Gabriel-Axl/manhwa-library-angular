import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MangaCardComponent } from './components/manga-card/manga-card.component';
import { CardApiService } from '../app/service/card-api.service';
import { MoreCardBtnComponent } from './components/more-card-btn/more-card-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    MangaCardComponent,
    MoreCardBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    CardApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
