import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  artistas:any;
  constructor(private service:SpotifyService,private router:Router) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.service.getArtistas(termino).subscribe((data:any) =>{
      this.artistas=data.artists.items;
      console.log(data.artists.items);
    });
  }

  verArtista(item:any){
    this.router.navigate(['/artista',item.id]);
  }

}
