import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesApp } from './RoutesApp';

@Injectable()
export class ControlService {

  constructor(private httpClient: HttpClient, private readonly routesApp: RoutesApp) {}

  getIgnicion(planetaIngresado) {
    return this.httpClient.get(this.routesApp.getRutaUrl + '/estacion/' + planetaIngresado);
  }
}
