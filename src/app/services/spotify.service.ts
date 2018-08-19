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
      'Authorization': 'Bearer BQA8sJhw8gLF_jv3aTA8giAdlNbyEiQeUR-UG55kxE0qIwY4itQsQOVX1EE3MKOoFDNBR-z6K2rBJW4xfOA'
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
