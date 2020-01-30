import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/Servicios/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelos/cliente';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  dni;
  nombre;
  apellido;
  direccion;
  localidad;
  email;
  tel;
  cliente;

  constructor(private con:ClienteService,private router:Router) { }

  ngOnInit() {
  }

  altaComprador()
  {
    this.cliente = new Cliente();

    this.cliente.dni = this.dni;
    this.cliente.nombre = this.nombre;
    this.cliente.apellido = this.apellido;
    this.cliente.direccion = this.direccion;
    this.cliente.localidad = this.localidad;
    this.cliente.email = this.email;
    this.cliente.tel = this.tel;

    this.con.createCliente(this.cliente)
      .subscribe(datos=>{
      this.router.navigate(["vender-mascota"]);
    })

  }


}
