import { Injectable } from '@angular/core';
import { Mascota } from '../Modelos/mascota';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  path:string;

  constructor(private http:HttpClient) 
  {
    console.log(http);
    console.log("Hola soy yo")
    this.path='http://localhost:8080/mascota'

   }

  getMascota()
  {
      return this.http.get<Mascota[]>(this.path);
  }

  getMascotaUnica(id:number)
  {
    return this.http.get<Mascota>(this.path+"/"+id);
  }
  createMascota(m:Mascota)
  {
      return this.http.post<Mascota>(this.path,m)
  }

  updateMascota(mascota:Mascota)
  {
      return this.http.put<Mascota>(this.path+"/"+mascota.id , mascota);
  }

  deleteMascota(mascota:Mascota)
  {
    return this.http.delete<Mascota>(this.path+"/"+mascota)
  }
}
