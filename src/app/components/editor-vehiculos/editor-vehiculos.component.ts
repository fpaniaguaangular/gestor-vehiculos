import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';

@Component({
  selector: 'app-editor-vehiculos',
  templateUrl: './editor-vehiculos.component.html',
  styleUrls: ['./editor-vehiculos.component.css']
})
export class EditorVehiculosComponent implements OnInit {

  public vehiculo: Vehiculo = { id: 0, nombre: "", descripcion: "", imagen: "" };

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params=>{
      this.vehiculo.id=params['id'];
      this.vehiculo.nombre=params['nombre'];
      this.vehiculo.descripcion=params['descripcion'];
      this.vehiculo.imagen=params['imagen'];
    });
  }

  public cancelar(): void {
    //this.enrutador.navigateByUrl("/listado");
  }

  public guardar():void {

  }
  public eliminar():void {
    
  }

}
