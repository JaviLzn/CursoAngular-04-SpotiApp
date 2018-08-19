import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent  {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  verArtista ( item: any) {
    let ArtistaId;

    if ( item.type === 'artist') {
      ArtistaId = item.id;
    } else {
      ArtistaId = item.artists[0].id;
    }
    this.router.navigate(['/artista', ArtistaId]);

  }

}
