import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ClienteWSService } from 'src/app/services/cliente-ws.service';

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css']
})
export class TablaVehiculosComponent implements OnInit {
  public vehiculos: Vehiculo[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'imagen'];

  constructor(private clienteWS: ClienteWSService, private enrutador:Router) { }

  ngOnInit(): void {
    this.clienteWS.findAll().subscribe(
      datos => {
        this.vehiculos = datos;
      }
    );
  }

  editar(vehiculo:Vehiculo):void{
    this.enrutador.navigate(['/editar/'+vehiculo.id+"/"+vehiculo.nombre]);
  }

}
