import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ClienteWSService } from 'src/app/services/cliente-ws.service';

@Component({
  selector: 'app-creador-vehiculos',
  templateUrl: './creador-vehiculos.component.html',
  styleUrls: ['./creador-vehiculos.component.css']
})
export class CreadorVehiculosComponent implements OnInit {

  public nuevoVehiculo: Vehiculo = { id: 0, nombre: "", descripcion: "", imagen: "" };

  constructor(private enrutador: Router, private servicioVehiculos: ClienteWSService) { }

  ngOnInit(): void {
  }

  public cancelar(): void {
    this.enrutador.navigateByUrl("/listado");
  }

  public crear(): void {
    this.servicioVehiculos.create(this.nuevoVehiculo).subscribe(
      {
        next(retorno: any) {
          console.log("Next:" + retorno.code);
          console.log("Next:" + retorno.message);
        },
        error(error: HttpErrorResponse) {
          //error es de tipo HttpErrorResponse
          console.log("Error:" + error.name);
          console.log("Error:" + error.message);
          console.log("Error:" + error.error);
          console.log("Error:" + error.ok);
        },
        complete() {
          console.log("Complete");
        }
      })
    }
}
