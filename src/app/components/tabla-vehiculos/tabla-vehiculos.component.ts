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
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'imagen', 'accion'];

  constructor(private clienteWS: ClienteWSService, private enrutador:Router) { }

  ngOnInit(): void {
    this.clienteWS.findAll().subscribe(
      datos => {
        this.vehiculos = datos;
      }
    );
  }

  editar(vehiculo:Vehiculo):void{
    //Creando una ruta de navegación del tipo /editar/idVehiculo/nombreVehiculo/descripcionVehiculo/imagenVehiculo
    //Creando el path con concatenaciones de cadenas
    //this.enrutador.navigate(['/editar/'+vehiculo.id+"/"+vehiculo.nombre+"/"+vehiculo.descripcion+"/"+vehiculo.imagen]);
    //Creando el path con TEMPLATE LITERAL
    //this.enrutador.navigate([`/editar/${vehiculo.id}/${vehiculo.nombre}/${vehiculo.descripcion}/${vehiculo.imagen}`]);
    //Creando el path con TEMPLATE LITERAL - Se asigna un nombre de imagen en 'hardcode' porque las barras (/) de la URL de la imagen provocan error
    this.enrutador.navigate([`/editar/${vehiculo.id}/${vehiculo.nombre}/${vehiculo.descripcion}/notfound.png`]);
  }

}
