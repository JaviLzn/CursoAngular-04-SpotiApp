import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCqZPXU5HiHQuCA-1-THL9pVYfPuOjfaF6-dFqi6ON8ysInibW3O9G9oTqgszGidcHazRsa-bckqI6DKKk'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe ( (response: any) => {
      console.log(response);
    } );
  }
}
