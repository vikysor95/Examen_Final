import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-alta-utente',
  templateUrl: './alta-utente.component.html',
  styleUrls: ['./alta-utente.component.css']
})
export class AltaUtenteComponent implements OnInit {
  numId;
  nombre;
  apellido;
  telefono;
  username;
  pasword;
  u;

  constructor(private con:UsuarioService,private router:Router) { }

  ngOnInit() {
  }

  altaUsuario()
  {
    this.u = new Usuario();
    this.u.id = 0;
    this.u.nombre = this.nombre;
    this.u.apellido = this.apellido;
    this.u.tel = +this.telefono;
    this.u.user = this.username;
    this.u.pass = this.pasword;

    this.con.createUsuario(this.u).subscribe(
      datos => this.router.navigate(['listar-usuario'])
    );

  }


}
