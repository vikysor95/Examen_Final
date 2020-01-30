import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  path:string;

  constructor(private http:HttpClient) {
    this.path='http://localhost:8080/usuario'
   }

   getUsuario()
   {
       return this.http.get<Usuario[]>(this.path);
   }
 
   getUsuarioUnico(id:number)
   {
     return this.http.get<Usuario>(this.path+"/"+id);
   }
   createUsuario(u: Usuario)
   {  
      console.log(u);
       return this.http.post<Usuario>(this.path,u);
   }
 
   updateUsuario(usuario:Usuario)
   {
       return this.http.put<Usuario>(this.path+"/"+usuario.id , usuario);
   }
 
   deleteUsuario(id:number)
   {
     return this.http.delete<Usuario>(this.path+"/"+id)
   }








}
