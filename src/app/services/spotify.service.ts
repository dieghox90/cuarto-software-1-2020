import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  cabeceras: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQDdRL7ecvG86AyggZcI7ifooaQ9hP5-C9RjSI6PGeuo87mF1A5qRVvNiEpGUsYprnYnh8EcOiKP8cQfs6E',
  });

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: this.cabeceras });
  }

  getArtistas(termino:string){
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{ headers: this.cabeceras })
  }

  getArtista(id:string){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`,{ headers: this.cabeceras });
  }

  getTopTracks(id:string){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`,{ headers: this.cabeceras });
  }

  
}
