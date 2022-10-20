import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';

@Component({
  selector: 'app-ficha-vehiculo',
  templateUrl: './ficha-vehiculo.component.html',
  styleUrls: ['./ficha-vehiculo.component.css']
})
export class FichaVehiculoComponent implements OnInit {
  @Input() vehiculo:Vehiculo|any;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
