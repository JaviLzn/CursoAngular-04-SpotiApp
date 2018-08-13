import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot( ROUTES, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
