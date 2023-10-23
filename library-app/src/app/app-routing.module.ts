import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangaFormComponent } from './components/manga-form/manga-form.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'manga',
    component: MangaFormComponent
  },
  {
    path:'manga/:titulo',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
