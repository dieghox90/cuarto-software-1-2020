import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];
  
  constructor(private service:UsuarioService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(usuariosResp => {
      this.usuarios = usuariosResp;
    });
  }

  eliminar(usuario: Usuario) { 
    Swal.fire({
      title: 'Confirmacion de eliminacion',
      html: `Desea eliminar al usuario <b>${usuario.nombres} ${usuario.apellidos}<b>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(usuario.id).subscribe(() => {
          Swal.fire('Exito', 'Usuario eliminado con exito', 'info');
          this.usuarios = this.usuarios.filter(us => us.id != usuario.id);
        });
      }
    });
  }

}
