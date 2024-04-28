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
import { MangaFormComponent } from './components/manga-form/manga-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment';
import { LoadingComponent } from './components/loading/loading.component';
import { DetailsComponent } from './pages/details/details.component';
import { FlipPagesComponent } from './components/flip-pages/flip-pages.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    MangaCardComponent,
    MoreCardBtnComponent,
    MangaFormComponent,
    LoadingComponent,
    DetailsComponent,
    FlipPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CardApiService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
