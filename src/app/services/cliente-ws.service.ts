import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo';

const URL_VEHICULOS = "https://vehiculos-historicos.herokuapp.com/vehiculos";

@Injectable({
  providedIn: 'root'
})
export class ClienteWSService {
  
  constructor(private clienteHTTP:HttpClient) { 
  }

  public create(vehiculo:Vehiculo) {
    const body = {};
    const parametros = new HttpParams()
      .append('nombre', vehiculo.nombre)
      .append('descripcion', vehiculo.descripcion)
      .append('imagen', vehiculo.imagen);
      return this.clienteHTTP.post<any>(URL_VEHICULOS, body, { params: parametros});
  }
  
  public findAll():Observable<Vehiculo[]> {
    return this.clienteHTTP.get<Vehiculo[]>(URL_VEHICULOS);
  }

}
