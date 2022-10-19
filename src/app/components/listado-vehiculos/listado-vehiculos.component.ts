import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ClienteWSService } from 'src/app/services/cliente-ws.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {

  public vehiculos: Vehiculo[] = [];

  constructor(private clienteWS: ClienteWSService) {
  }

  ngOnInit(): void {
    this.clienteWS.findAll().subscribe(
      datos => {
        this.vehiculos = datos;
        //HACEMOS LAS COSAS CON LOS DATOS RECIBIDOS
      }
    );
    //HACER COSAS MIENTRAS ESPERO

    /*this.clienteWS.findAll().subscribe({
      next(data) {
        this.vehiculos = data;
      },
      complete() {
        console.warn("COMPLETE");
      },
      error(err) {
        console.error("ERROR:" + err);
      }
    });*/
  }

}
