import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }
  

  public listar(): Observable<Usuario[]> { 
    return this.http.get<Usuario[]>(this.url + "usuarios");
  }

  public create(usuario: Usuario): Observable<Usuario> { 
    return this.http.post<Usuario>(this.url + "usuario", usuario);
  }

  public update(usuario: Usuario): Observable<Usuario> { 
    return this.http.put<Usuario>(this.url + "usuario", usuario);
  }

  public delete(id:number): Observable<any> { 
    return this.http.delete<any>(this.url + "usuario/"+id);
  }

  public findById(id: number): Observable<Usuario> { 
    return this.http.get<Usuario>(this.url+"usuario-busqueda/"+id)
  }
}
