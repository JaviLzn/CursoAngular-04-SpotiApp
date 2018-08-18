import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent  {

  artistas: any [] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) { }

  buscar( termino: string) {
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }

}
