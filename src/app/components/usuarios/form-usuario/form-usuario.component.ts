import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Direccion } from 'src/app/models/direccion';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuario: Usuario;
  titulo: string;

  forma: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute, private service: UsuarioService) {
    this.crearFormulario();
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
          this.forma.get('nombres').setValue(this.usuario.nombres);
          this.forma.get('apellidos').setValue(this.usuario.apellidos);
          this.forma.get('cedula').setValue(this.usuario.cedula);
          this.forma.get('email').setValue(this.usuario.correo);
        });
        this.titulo = "Editar Usuario";
      }
    });
  }

  guardar() {

    console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {

      this.usuario.nombres = this.forma.get('nombres').value;
      this.usuario.apellidos = this.forma.get('apellidos').value;
      this.usuario.cedula = this.forma.get('cedula').value;
      this.usuario.correo = this.forma.get('email').value;

      this.service.create(this.usuario).subscribe(us => {
        Swal.fire('Exito', 'Usuario guardado con exito', 'success');
        this.usuario = new Usuario();
        this.usuario.direccion = new Direccion();
        this.forma.reset();
      });
    }
  }

  editar() {

    console.log(this.forma);
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.usuario.nombres = this.forma.get('nombres').value;
      this.usuario.apellidos = this.forma.get('apellidos').value;
      this.usuario.cedula = this.forma.get('cedula').value;
      this.usuario.correo = this.forma.get('email').value;
      this.service.update(this.usuario).subscribe(us => {
        Swal.fire('Exito', 'Usuario actualizado con exito', 'success');
        this.router.navigate(['/usuarios']);
      });
    }
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
  }

  get nombresNoValido() {
    return this.forma.get('nombres').invalid && this.forma.get('nombres').touched;
  }

  get apellidosNoValido() {
    return this.forma.get('apellidos').invalid && this.forma.get('apellidos').touched;
  }


  get cedulaNoValido() {
    return this.forma.get('cedula').invalid && this.forma.get('cedula').touched;
  }

  get emailNoValido() {
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }

}



