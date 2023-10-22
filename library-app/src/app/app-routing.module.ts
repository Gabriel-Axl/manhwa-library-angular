import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangaFormComponent } from './components/manga-form/manga-form.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'manga',
    component: MangaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
