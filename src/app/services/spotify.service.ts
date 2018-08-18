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
      'Authorization': 'Bearer BQCx4lHm-nxlEbmGgETmReM9C1b8yMiu3zh0-_S4Y8GywmPAFpUbLcTAghG0noUk9o0E5U6oMaUhBu0qGRc'
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
