import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private activatedroute: ActivatedRoute,
               private spotify: SpotifyService) {
    this.activatedroute.params.subscribe ( params => {
      this.getArtista( params['id']);
      this.getArtistaTopTracks( params['id']);
    });
   }

   getArtista ( id: string) {
     this.loading = true;
     this.spotify.getArtista( id ).subscribe ( artista => {
       this.artista = artista;
       this.loading = false;
     });
   }

 getArtistaTopTracks ( id: string ) {
   this.spotify.getArtistaTopTracks ( id )
            .subscribe( topTracks => {
              console.log(topTracks);
              this.topTracks = topTracks;
            });
 }
}
