import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { VocalesPipe } from './pipesPersonalizados/vocales.pipe';
import { AlbumsComponent } from './components/albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagenesPipe } from './pipesPersonalizados/imagenes.pipe';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormUsuarioComponent } from './components/usuarios/form-usuario/form-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroduccionComponent,
    PipesComponent,
    VocalesPipe,
    AlbumsComponent,
    ImagenesPipe,
    SearchComponent,
    ArtistaComponent,
    UsuariosComponent,
    FormUsuarioComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
