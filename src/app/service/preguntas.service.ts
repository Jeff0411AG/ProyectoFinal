import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  url:string="http://localhost:5000/preguntas";
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<any>(this.url);
  }
  


}
