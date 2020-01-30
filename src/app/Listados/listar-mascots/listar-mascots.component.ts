import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotasService } from 'src/app/Servicios/mascotas.service';
import { Mascota } from 'src/app/Modelos/mascota';

@Component({
  selector: 'app-listar-mascots',
  templateUrl: './listar-mascots.component.html',
  styleUrls: ['./listar-mascots.component.css']
})
export class ListarMascotsComponent implements OnInit {

  mascotas;
  id;
  risultado;

  constructor(private con:MascotasService,private router:Router) {   }

  ngOnInit() {
   
    
    this.con.getMascota()
      .subscribe(datos=>{this.mascotas=datos; });


  }

  modificarMascota(id:number)
  {
    this.con.updateMascota(this.mascotas).subscribe(mod=>{this.mascotas=mod;});
    
  }

  eliminarMascota(id:number)
{
   {
      this.con.deleteMascota(this.id).subscribe(eliminar=>{this.mascotas=this.mascotas.filter(m=>m.id!=id);
      alert("Mascota eliminada");
      });
   }
  }

  venderMascota(id)
  {
    this.router.navigate(['comprovar']);
  }

  anadirMascota()
  {
    this.router.navigate(['form-mascota']);
  }



}
