import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creador-vehiculos',
  templateUrl: './creador-vehiculos.component.html',
  styleUrls: ['./creador-vehiculos.component.css']
})
export class CreadorVehiculosComponent implements OnInit {

  constructor(private enrutador:Router) { }

  ngOnInit(): void {
  }

  public cancelar():void {
    this.enrutador.navigateByUrl("/listado");
  }

}
