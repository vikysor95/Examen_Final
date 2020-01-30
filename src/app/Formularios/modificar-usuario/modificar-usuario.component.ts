import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  numId;
  nombre;
  apellido;
  telefono;
  username;
  pasword;
  u;

  constructor(private con:UsuarioService,private router:Router, private route:ActivatedRoute) { 
  }

  ngOnInit() {
this.route.queryParams.subscribe(params => {
  this.numId = params["id"];
})

      this.con.getUsuarioUnico(this.numId)
      .subscribe(datos=>{
        this.numId = datos.id;
        this.nombre = datos.nombre;
        this.apellido = datos.apellido;
        this.telefono = datos.tel;
        this.username = datos.user;
        this.pasword = datos.pass;
      });
  }

  modificarUsuario()
  {
    this.u = new Usuario();
    this.u.id = this.numId;
    this.u.nombre = this.nombre;
    this.u.apellido = this.apellido;
    this.u.tel = +this.telefono;
    this.u.user = this.username;
    this.u.pass = this.pasword;

    this.con.updateUsuario(this.u).subscribe(
      datos => this.router.navigate(['listar-usuario'])
    );

  }
}
