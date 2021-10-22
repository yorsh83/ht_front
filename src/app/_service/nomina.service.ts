import { Empleado } from './../_model/empleado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Nomina } from '../_model/nomina';
import { HOST } from '../_shared/var.constants';

@Injectable({
  providedIn: 'root'
})
export class NominaService {

  url: string = HOST;
  nominaCambio = new Subject<Nomina[]>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Nomina[]>(`${this.url}/empleados`);
  }

  listarId(idEmpleado: number) {
    return this.http.get<Nomina>(`${this.url}/nominas/${idEmpleado}`);
  }

  registrar(nomina: Nomina) {
    return this.http.post(`${this.url}/nominas`, nomina);
  }

  modificar(nomina: Nomina) {
    return this.http.put(`${this.url}/nominas`, nomina);
  }

  eliminar(idEmpleado: number) {
    return this.http.delete(`${this.url}/nominas/${idEmpleado}`);
  }
}
