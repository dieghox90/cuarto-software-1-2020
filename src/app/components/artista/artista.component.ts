import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any={};
  topTracks:any[]=[];

  constructor(private service:SpotifyService,
  private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p =>{
      this.getArtista(p['id']);
      this.getTracks(p['id']);
    });
  }

  getArtista(id:string){
    this.service.getArtista(id).subscribe(a=>{
      this.artista=a;
      console.log(this.artista);
    });
  }

  getTracks(id:string){
    this.service.getTopTracks(id).subscribe((t:any)=>{
      this.topTracks=t.tracks;
      console.log(t);
    });
  }

}
