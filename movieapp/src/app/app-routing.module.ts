import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MovieComponent,
  },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'categories',
    component: CategoryComponent,
  },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
