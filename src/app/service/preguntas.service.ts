import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { Preguntas } from '../model/preguntas';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  url:string="http://localhost:5000/preguntas";

  private listarCambio=new Subject<Preguntas[]>()

  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Preguntas[]>(this.url);
  }
  insertar(pregunta:Preguntas){
    return this.http.post(this.url, pregunta);
  }
  setListar(llistaNueva:Preguntas[]){
    this.listarCambio.next(llistaNueva);
  }
  getLista(){
    return this.listarCambio.asObservable();
  }
  modificar(preguntas:Preguntas){
    return this.http.put(this.url + "/" + preguntas.id, preguntas);
  }

  listarId(id:number){
    return this.http.get<Preguntas>(`${this.url}/${id}`);
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

  buscar(texto:string){
    if(texto.length !=0){
      return this.http.post<Preguntas[]>( `${this.url}/buscar`, texto.toLowerCase(),{

      })
    }
    return EMPTY;
  }



}
