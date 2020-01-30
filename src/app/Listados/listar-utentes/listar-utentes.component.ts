import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-utentes',
  templateUrl: './listar-utentes.component.html',
  styleUrls: ['./listar-utentes.component.css']
})
export class ListarUtentesComponent implements OnInit {

  constructor(private con:UsuarioService,private router:Router) { }
  id;
  usuarios;

  ngOnInit() {
    this.con.getUsuario()
    .subscribe(datos=>{this.usuarios=datos; });
  }

  modificarUsuario(id)
  {
    this.router.navigate(['modificar-usuario'], {queryParams: {id:id}});
  }

  eliminarUsuario(id)
  {
    this.con.deleteUsuario(id)
    .subscribe(datos=>{this.router.navigate(['listar-usuario']); });
    window.location.reload();
  }

  anadirUsuario()
  {
    this.router.navigate(['form-utente']);
  }
}
