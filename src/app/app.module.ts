import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMascotsComponent } from './Listados/listar-mascots/listar-mascots.component';
import { ListarvendidasComponent } from './Listados/listarvendidas/listarvendidas.component';
import { ListarUtentesComponent } from './Listados/listar-utentes/listar-utentes.component';
import { AltaMascotaComponent } from './Formularios/alta-mascota/alta-mascota.component';
import { AltaUtenteComponent } from './Formularios/alta-utente/alta-utente.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComprobarComponent } from './comprobar/comprobar.component';
import { ComprobarClienteComponent } from './comprobar-cliente/comprobar-cliente.component';
import {FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AltaClienteComponent } from './Formularios/alta-cliente/alta-cliente.component';
import { ModificarUsuarioComponent } from './Formularios/modificar-usuario/modificar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarMascotsComponent,
    ListarvendidasComponent,
    ListarUtentesComponent,
    AltaMascotaComponent,
    AltaUtenteComponent,
    HomePageComponent,
    ComprobarComponent,
    ComprobarClienteComponent,
    AltaClienteComponent,
    ModificarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
