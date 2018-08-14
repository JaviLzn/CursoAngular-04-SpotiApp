import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent  {

  artistas: any [] = [];

  constructor( private spotify: SpotifyService) { }

  buscar( termino: string) {
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      console.log(data.artists.items);
      this.artistas = data.artists.items;
    });
  }

}
