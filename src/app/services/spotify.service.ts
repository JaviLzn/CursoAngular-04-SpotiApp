import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAgELHYWMn6RIDoIHp8_yM_ksdOxaAOJSXbCmy0tH1HIyfp3kQmQ3eoJWO01hlNAJUc9AhUAwjY_HSmFz8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
  getArtistas( termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAgELHYWMn6RIDoIHp8_yM_ksdOxaAOJSXbCmy0tH1HIyfp3kQmQ3eoJWO01hlNAJUc9AhUAwjY_HSmFz8'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
