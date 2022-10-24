import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaNivel21Component } from './components/ayuda-nivel21/ayuda-nivel21.component';
import { AyudaNivel22Component } from './components/ayuda-nivel22/ayuda-nivel22.component';
import { AyudaPrincipalComponent } from './components/ayuda-principal/ayuda-principal.component';
import { C404Component } from './components/c404/c404.component';
import { CreadorVehiculosComponent } from './components/creador-vehiculos/creador-vehiculos.component';
import { EditorVehiculosComponent } from './components/editor-vehiculos/editor-vehiculos.component';
import { ListadoVehiculosSecuencialComponent } from './components/listado-vehiculos-secuencial/listado-vehiculos-secuencial.component';
import { ListadoVehiculosComponent } from './components/listado-vehiculos/listado-vehiculos.component';
import { NoAutorizadoComponent } from './components/no-autorizado/no-autorizado.component';
import { TablaVehiculosComponent } from './components/tabla-vehiculos/tabla-vehiculos.component';
import { ControlAccesoGuard } from './guards/control-acceso.guard';

const routes: Routes =
  [
    { path: "listado", component: ListadoVehiculosComponent, pathMatch: 'prefix' },
    { path: "listado-secuencial", component: ListadoVehiculosSecuencialComponent, pathMatch: 'prefix' },
    { path: "listado-tabla", component: TablaVehiculosComponent, pathMatch: 'prefix' },
    {
      path: "crear",
      component: CreadorVehiculosComponent,
      pathMatch: 'prefix',
    },
    {
      path: "editar/:id/:nombre/:descripcion/:imagen",
      component: EditorVehiculosComponent,
      pathMatch: 'prefix'
    },
    { path: "nuevo", redirectTo: "crear" },
    {
      path: "ayuda", component: AyudaPrincipalComponent, canActivate: [ControlAccesoGuard],
      children: [
        { path: 'hijo1', component: AyudaNivel21Component },
        { path: 'hijo2', component: AyudaNivel22Component }
      ]
    },
    { path: "noautorizado", component: NoAutorizadoComponent },
    { path: "", component: ListadoVehiculosComponent, pathMatch: 'full' },
    { path: "**", component: C404Component, pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
