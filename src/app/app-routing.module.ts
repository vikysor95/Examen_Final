import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMascotsComponent } from './Listados/listar-mascots/listar-mascots.component';
import { AltaClienteComponent } from './Formularios/alta-cliente/alta-cliente.component';
import { ListarUtentesComponent } from './Listados/listar-utentes/listar-utentes.component';
import { AltaMascotaComponent } from './Formularios/alta-mascota/alta-mascota.component';
import { AltaUtenteComponent } from './Formularios/alta-utente/alta-utente.component';
import { ModificarUsuarioComponent } from './Formularios/modificar-usuario/modificar-usuario.component';
import { ComprobarClienteComponent } from './comprobar-cliente/comprobar-cliente.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [{

  path:'listado-mascotas',
  component:ListarMascotsComponent
},{
  path:'listar-usuario',
  component:ListarUtentesComponent
},{
  path:'fom-mascota',
  component:AltaMascotaComponent
},{
  path:'form-utente',
  component:AltaUtenteComponent
},{
  path:'form-cliente',
  component:AltaClienteComponent
},{
  path:'modificar-usuario',
  component:ModificarUsuarioComponent
},{
  path:'comprovar',
  component:ComprobarClienteComponent
},{
  path:'home-page',
  component:HomePageComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
