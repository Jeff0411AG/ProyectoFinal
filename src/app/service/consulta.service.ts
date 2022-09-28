import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Consulta } from '../model/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url:string="http://localhost:5000/consultas";
  private listaCambio= new Subject<Consulta[]>()


  
  constructor(private http:HttpClient) { }

  listar() {
    return this.http.get<Consulta[]>(this.url);
  }
  insertar(consulta: Consulta) {
    return this.http.post(this.url, consulta);
  }
  setLista(listaNueva: Consulta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(consulta:Consulta){
    return this.http.put(this.url + "/"+ consulta.id,consulta);
  }

  listarId(id:number){
    return this.http.get<Consulta>(`${this.url}/${id}`);
  }



}
