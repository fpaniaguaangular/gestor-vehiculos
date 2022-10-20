import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ClienteWSService } from 'src/app/services/cliente-ws.service';

@Component({
  selector: 'app-listado-vehiculos-secuencial',
  templateUrl: './listado-vehiculos-secuencial.component.html',
  styleUrls: ['./listado-vehiculos-secuencial.component.css']
})
export class ListadoVehiculosSecuencialComponent implements OnInit {

  public vehiculos: Vehiculo[] = [];

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
  
    this.clienteWS.findAllSecuencial()
    .subscribe({
      next(vehiculo) {
        outer.vehiculos.push(vehiculo);
      },
      complete() {
        console.warn("COMPLETE");
      },
      error(err) {
        console.error("ERROR:" + err);
      }
    }); 
  }
}