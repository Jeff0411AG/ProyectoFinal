import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { DoctorListarComponent } from '../page/doctor/doctor-listar/doctor-listar.component';
import { Doctor } from '../model/doctor';
import{Subject} from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  url:string="http://localhost:5000/doctor"
  private listaCambio =new Subject<Doctor[]>();
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<any>(this.url);
  }
  insertar(doctor: Doctor){
    return this.http.post(this.url,doctor);
  }
  setLista(listaNueva:Doctor[]){
    this.listaCambio.next(listaNueva);
  }
  getlista(){
    return this.listaCambio.asObservable();
  }
}
