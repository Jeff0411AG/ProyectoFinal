import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../model/doctor';
import{Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  url:string="http://localhost:5000/doctor"
  private listaCambio =new Subject<Doctor[]>()
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


}
