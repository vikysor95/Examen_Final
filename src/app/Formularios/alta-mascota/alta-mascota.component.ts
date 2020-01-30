import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-mascota',
  templateUrl: './alta-mascota.component.html',
  styleUrls: ['./alta-mascota.component.css']
})
export class AltaMascotaComponent implements OnInit {
  id;
  nombre;
  tipo;
  precio;

  constructor() { }

  ngOnInit() {
  }

  altaMascota()
  {
    
  }

}
