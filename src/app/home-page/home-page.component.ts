import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router)
  {}


  verListado()
  {
    this.router.navigate(['listado-mascotas']);
  }

  verAlta()
  {
    this.router.navigate(['alta-mascota']);
  }

  comprarMascota()
  {
    this.router.navigate(['listado-mascotas']);
  }

  listarUtentes()
  {
    this.router.navigate(['listar-usuario']);
  }

  ngOnInit() {
  }

  //verListadoMascotas() {console.log("funciona");this.router.navigate(['listado-mascotas']);}


}
