import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Preguntas } from '../model/preguntas';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  url:string="http://localhost:5000/preguntas";

  private listarCambio=new Subject<Preguntas[]>()
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
  
}
