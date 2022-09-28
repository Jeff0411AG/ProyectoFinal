import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { Consulta } from '../model/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url:string="http://localhost:5000/consultas";
  private listaCambio= new Subject<Consulta[]>()
  
  private confirmaEliminacion = new Subject<Boolean>()
  
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

    //eliminar
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
      return this.http.post<Consulta[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }







}
