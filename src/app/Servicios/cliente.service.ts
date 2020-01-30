import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cliente} from '../Modelos/cliente'
import { Venta } from '../Modelos/venta';
import { Mascota } from '../Modelos/mascota';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  path:string;

  constructor(private http:HttpClient) {
    this.path='http://localhost:8080/cliente'
  }

  getCliente()
  {
      return this.http.get<Cliente[]>(this.path);
  }

  getClienteUnica(id:number)
  {
    return this.http.get<Cliente>(this.path+"/"+id);
  }
  createCliente(c:Cliente)
  {
      return this.http.post<Cliente>(this.path,c)
  }

  updateCliente(cliente:Cliente)
  {
      return this.http.put<Cliente>(this.path+"/"+cliente.id , cliente);
  }

  deleteCliente(cliente:Cliente)
  {
    return this.http.delete<Cliente>(this.path+"/"+cliente)
  }

  vender(venta:Venta){
    return this.http.post("http://localhost:8080/venta", venta);
  }

  getMascotaUnica(id:number)
  {
    return this.http.get<Mascota>("http://localhost:8080/mascota"+"/"+id);
  }
}
