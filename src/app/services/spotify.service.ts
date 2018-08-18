import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQC2S1c_GlrAv7jBdPEnU8kU-X_HvaRbMk-gNdTNlwpQ05ibc38AJ2XDjPJRtJfjZx1TcH31F4_n1xYks4w'
    });

    return this.http.get( url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
                    .pipe( map (data =>  data['albums'].items) );
  }
  getArtistas( termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
             .pipe ( map ( data =>  data['artists'].items ));
  }
}
