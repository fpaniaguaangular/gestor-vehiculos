import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo';

const URL_GET_VEHICULOS = "https://vehiculos-historicos.herokuapp.com/vehiculos";

@Injectable({
  providedIn: 'root'
})
export class ClienteWSService {
  
  constructor(private clienteHTTP:HttpClient) { 
  }

  public findAll():Observable<Vehiculo[]> {
    return this.clienteHTTP.get<Vehiculo[]>(URL_GET_VEHICULOS);
  }

}
