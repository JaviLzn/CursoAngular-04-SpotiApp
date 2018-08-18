import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQCx4lHm-nxlEbmGgETmReM9C1b8yMiu3zh0-_S4Y8GywmPAFpUbLcTAghG0noUk9o0E5U6oMaUhBu0qGRc'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                    .pipe( map (data =>  data['albums'].items) );
  }
  getArtistas( termino: string) {

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQCx4lHm-nxlEbmGgETmReM9C1b8yMiu3zh0-_S4Y8GywmPAFpUbLcTAghG0noUk9o0E5U6oMaUhBu0qGRc'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
             .pipe ( map ( data =>  data['artists'].items ));
  }
}
