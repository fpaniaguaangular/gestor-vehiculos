import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ClienteWSService } from 'src/app/services/cliente-ws.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {

  public nombreBusqueda:string="";
  public vehiculosListaCompleta: Vehiculo[] = [];
  public vehiculos:Vehiculo[]=[];

  constructor(private clienteWS: ClienteWSService) {
  }

  ngOnInit(): void {
    /*
    this.clienteWS.findAll().subscribe(
      datos => {
        this.vehiculos = datos;
        //HACEMOS LAS COSAS CON LOS DATOS RECIBIDOS
      }
    );
    //HACER COSAS MIENTRAS ESPERO
    */
    let outer = this;
    this.clienteWS.findAll().subscribe({
      next(data) {
        outer.vehiculos = data;
        outer.vehiculosListaCompleta = data;
      },
      complete() {
        console.warn("COMPLETE");
      },
      error(err) {
        console.error("ERROR:" + err);
      }
    });
    this.clienteWS.findAll().subscribe();
  }
  
  filtrar():void {
    this.vehiculos = this.vehiculosListaCompleta.filter(vehiculo => 
      vehiculo.nombre.toUpperCase().indexOf(this.nombreBusqueda.toUpperCase())>-1);
  }
  
}