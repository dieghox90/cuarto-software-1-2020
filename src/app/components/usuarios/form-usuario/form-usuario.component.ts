import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuario: Usuario;
  titulo: string;

  constructor(private service: UsuarioService) {
    this.usuario = new Usuario();
    this.titulo = "Nuevo Usuario";
   }

  ngOnInit(): void {
  }

  guardar() { 
    this.service.create(this.usuario).subscribe(us => {
      Swal.fire('Exito', 'Usuario guardado con exito', 'success');
      this.usuario = new Usuario();
    });
  }

}
