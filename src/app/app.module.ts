import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ListadoVehiculosComponent } from './components/listado-vehiculos/listado-vehiculos.component';
import { CreadorVehiculosComponent } from './components/creador-vehiculos/creador-vehiculos.component';
import { TablaVehiculosComponent } from './components/tabla-vehiculos/tabla-vehiculos.component';
import { C404Component } from './components/c404/c404.component';


//ANGULAR MATERIAL
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { EditorVehiculosComponent } from './components/editor-vehiculos/editor-vehiculos.component';
import { ListadoVehiculosSecuencialComponent } from './components/listado-vehiculos-secuencial/listado-vehiculos-secuencial.component';
import { FichaVehiculoComponent } from './components/ficha-vehiculo/ficha-vehiculo.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MayusculasDirective } from './directives/mayusculas.directive';
import { AyudaPrincipalComponent } from './components/ayuda-principal/ayuda-principal.component';
import { AyudaNivel21Component } from './components/ayuda-nivel21/ayuda-nivel21.component';
import { AyudaNivel22Component } from './components/ayuda-nivel22/ayuda-nivel22.component';
import { NoAutorizadoComponent } from './components/no-autorizado/no-autorizado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ListadoVehiculosComponent,
    CreadorVehiculosComponent,
    C404Component,
    TablaVehiculosComponent,
    EditorVehiculosComponent,
    ListadoVehiculosSecuencialComponent,
    FichaVehiculoComponent,
    CabeceraComponent,
    MayusculasDirective,
    AyudaPrincipalComponent,
    AyudaNivel21Component,
    AyudaNivel22Component,
    NoAutorizadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
