import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotasService } from '../Servicios/mascotas.service';
import { ClienteService } from '../Servicios/cliente.service';
import { Venta } from '../Modelos/venta';

@Component({
  selector: 'app-comprobar-cliente',
  templateUrl: './comprobar-cliente.component.html',
  styleUrls: ['./comprobar-cliente.component.css']
})
export class ComprobarClienteComponent implements OnInit {
  mascota;
  dni;
  comprador;
  v;

  constructor(private router:Router, private http:ClienteService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.http.getMascotaUnica(params["id"]).subscribe(datos => {
        this.mascota = datos;
      });
  });
}

  comprovarDNI()
  {

    this.http.getClienteUnica(this.dni)
        .subscribe(comprador=>{this.comprador = comprador;})


    if(this.comprador != undefined)//afermativo
   {
      this.v = new Venta();
      this.v.id = 0;
      this.v.id_mascota = this.mascota.id;
      this.v.tipo_mascota = this.mascota.tipo;
      this.v.precio = this.mascota.precio;
      this.v.id_usuario = this.comprador;

      this.http.vender( this.v)
          .subscribe(datos => this.router.navigate['listar-mascotas']);
      

   // }else{

     // this.router.navigate(['form-comprador']);

    }


}

}
