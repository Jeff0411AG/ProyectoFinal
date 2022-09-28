import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../model/doctor';
import { EMPTY, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  url:string="http://localhost:5000/doctor"
  private listaCambio =new Subject<Doctor[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
 

  listar() {
    return this.http.get<Doctor[]>(this.url);
  }
  insertar(propietario: Doctor) {
    return this.http.post(this.url, propietario);
  }
  setLista(listaNueva: Doctor[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  
  modificar(propietario: Doctor) {
    return this.http.put(this.url + "/" + propietario.id, propietario);
  }
  listarId(id: number) {
    return this.http.get<Doctor>(`${this.url}/${id}`);
  }


  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Doctor[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
    
}
