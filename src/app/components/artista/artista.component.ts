import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  constructor( private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe ( params => {
      console.log(params['id']);
    });
   }



}
