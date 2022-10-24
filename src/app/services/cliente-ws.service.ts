import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { RetornoWS } from '../models/retorno-ws';
import { Vehiculo } from '../models/vehiculo';

const URL_VEHICULOS = "https://vehiculos-historicos.herokuapp.com/vehiculos";

@Injectable({
  providedIn: 'root'
})
export class ClienteWSService {

  constructor(private clienteHTTP: HttpClient) {
    
  }

  public create(vehiculo: Vehiculo) {
    const body = {};
    const parametros = new HttpParams()
      .append('nombre', vehiculo.nombre)
      .append('descripcion', vehiculo.descripcion)
      .append('imagen', vehiculo.imagen);
    return this.clienteHTTP.post<any>(URL_VEHICULOS, body, { params: parametros });
  }

  public findAll(): Observable<Vehiculo[]> {
    return this.clienteHTTP.get<Vehiculo[]>(URL_VEHICULOS);
  }

  public update(vehiculo: Vehiculo):Observable<RetornoWS> {
    const body = {};
    const parametros = new HttpParams()
      .append('id', vehiculo.id)
      .append('nombre', vehiculo.nombre)
      .append('descripcion', vehiculo.descripcion)
      .append('imagen', vehiculo.imagen);
    return this.clienteHTTP.put<any>(URL_VEHICULOS, body, { params: parametros });
  }

  public delete(id:number):Observable<RetornoWS> {
    const body = {};
    const parametros = new HttpParams()
      .append('id', id);
    return this.clienteHTTP.delete<any>(URL_VEHICULOS, { params: parametros });
  }

  public findAllSecuencial(): Observable<Vehiculo> {
    let listadoVehiculos: Vehiculo[] = [];
    //Obtención de los datos del WS
    this.clienteHTTP.get<Vehiculo[]>(URL_VEHICULOS).subscribe(
      listadoVehiculosWS => {
        listadoVehiculos = listadoVehiculosWS;
      }
    );
    
    //Generando el Observable que 'emite' datos
    return new Observable(
      subscriber => {
        let indice = 0;
        let intervalo = setInterval(() => {
          subscriber.next(listadoVehiculos[indice]);
          indice++;
          if (indice == listadoVehiculos.length) {
            clearInterval(intervalo);
            subscriber.complete();
          }
        }, 1000);
      });
  }
}
