import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  { path: 'introduccion', component: IntroduccionComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artista/:id', component: ArtistaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'introduccion' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
