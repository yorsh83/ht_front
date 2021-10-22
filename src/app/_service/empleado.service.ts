import { Empleado } from 'src/app/_model/empleado';
import { EmpleadoComponent } from './../pages/empleado/empleado.component';
import { HOST } from './../_shared/var.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url: string = HOST;
  empleadoCambio = new Subject<Empleado[]>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Empleado[]>(`${this.url}/empleados`);
  }

  listarPageable(p: number, s: number) {
    return this.http.get(`${this.url}/empleados/pageable?page=${p}&size=${s}`)
  }

  listarId(idEmpleado: number) {
    return this.http.get<Empleado>(`${this.url}/empleados/${idEmpleado}`);
  }

  registrar(empleado: Empleado) {
    return this.http.post(`${this.url}/empleados`, empleado);
  }

  modificar(empleado: Empleado) {
    return this.http.put(`${this.url}/empleados`, empleado);
  }

  eliminar(idEmpleado: number) {
    return this.http.delete(`${this.url}/empleados/${idEmpleado}`);
  }

}
