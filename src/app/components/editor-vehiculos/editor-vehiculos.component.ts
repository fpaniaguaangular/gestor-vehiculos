import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RetornoWS } from 'src/app/models/retorno-ws';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ClienteWSService } from 'src/app/services/cliente-ws.service';

@Component({
  selector: 'app-editor-vehiculos',
  templateUrl: './editor-vehiculos.component.html',
  styleUrls: ['./editor-vehiculos.component.css']
})
export class EditorVehiculosComponent implements OnInit {

  public mensajeError:string="";
  public ventanaConfirmacionVisible:boolean=false;
  public vehiculo: Vehiculo = { id: 0, nombre: "", descripcion: "", imagen: "" };

  constructor(private ar:ActivatedRoute, private enrutador:Router, private webService:ClienteWSService) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params=>{
      this.vehiculo.id=params['id'];
      this.vehiculo.nombre=params['nombre'];
      this.vehiculo.descripcion=params['descripcion'];
      this.vehiculo.imagen=params['imagen'].replaceAll("*","/");
    });
  }

  public cancelar(): void {
    this.enrutador.navigateByUrl("/listado-tabla");
  }

  public guardar():void {
    this.webService.update(this.vehiculo).subscribe(
      data => {
        if (data.code==0) {
          this.enrutador.navigateByUrl("/listado-tabla");
        } else {
          this.mensajeError=data.message;
        }
      }
    )
  }
  
  public solicitarConfirmacionEliminado():void {
    this.ventanaConfirmacionVisible=true;
  }

  public eliminar():void {
    this.webService.delete(this.vehiculo.id).subscribe(
      data => {
        if (data.code==0) {
          this.enrutador.navigateByUrl("/listado-tabla");
        } else {
          this.mensajeError=data.message;
        }
      }
    )
  }

  public ocultarVentana():void {
    this.ventanaConfirmacionVisible=false;
  }

}
