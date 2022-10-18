import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { CreadorVehiculosComponent } from './components/creador-vehiculos/creador-vehiculos.component';
import { ListadoVehiculosComponent } from './components/listado-vehiculos/listado-vehiculos.component';

const routes: Routes = 
  [
    {path:"listado",component:ListadoVehiculosComponent,pathMatch:'prefix'},
    {
      path:"crear",
      component:CreadorVehiculosComponent,
      pathMatch:'prefix'
    },
    {path:"nuevo",redirectTo:"crear"},
    {path:"",component:ListadoVehiculosComponent,pathMatch:'full'},
    {path:"**",component:C404Component,pathMatch:'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
