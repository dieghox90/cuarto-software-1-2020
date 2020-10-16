import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Direccion } from 'src/app/models/direccion';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuario: Usuario;
  titulo: string;

  constructor(private router:Router,private activateRoute:ActivatedRoute,private service: UsuarioService) {
    this.usuario = new Usuario();
    this.usuario.direccion = new Direccion();
    this.titulo = "Nuevo Usuario";
   }

  ngOnInit(): void {

    // Obteniendo los parametros de la ruta
    this.activateRoute.params.subscribe(p => {
      if (p['id']) { 
        this.service.findById(p['id']).subscribe(us => {
          this.usuario = us;
          console.log(this.usuario);
        });
        this.titulo = "Editar Usuario";
      }
    });
  }

  guardar() { 

    console.log(this.usuario);
    this.service.create(this.usuario).subscribe(us => {
      Swal.fire('Exito', 'Usuario guardado con exito', 'success');
      this.usuario = new Usuario();
      this.usuario.direccion = new Direccion();
    });
  }

  editar() { 
    this.service.update(this.usuario).subscribe(us => {
      Swal.fire('Exito', 'Usuario actualizado con exito', 'success');
      this.router.navigate(['/usuarios']);
    });
  }

}
